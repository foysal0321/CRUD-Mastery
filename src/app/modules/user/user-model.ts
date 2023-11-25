import { Schema, model } from 'mongoose'
import { TAddress, TFullname, TOrder, TUser, UserMethod, UserModel } from './user-interface'
import bcrypt from 'bcrypt'
import config from '../../config'



const fullNameSchema = new Schema<TFullname>({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    }
})

const adressSchema = new Schema<TAddress>({
    street: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    }
})

const orderSchema = new Schema<TOrder>({
    productName: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    }
})

const userSchema = new Schema<TUser, UserModel, UserMethod>({
    userId: {
        type: Number,
        unique: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String
    },
    fullName: fullNameSchema,
    age: {
        type: Number
    },
    email: {
        type: String,
        unique: true
    },
    isActive: {
        type: Boolean
    },
    hobbies: {
        type: [String],
    },
    address: adressSchema,
    orders: {
        type: [orderSchema]
    }
})

//middware
userSchema.pre('save', async function (next) {
    const user = this
    //hasing password and save into db
    user.password = await bcrypt.hash(
        user.password, Number(config.bcrpt_salt_round)
    )
    next()
})

// password not send into response
userSchema.methods.toJSON = function() {
    let obj = this.toObject();
    delete obj.password;
    return obj;
  }

// check existUser into db
userSchema.methods.isUserExist = async function (userId: string) {
    const existUser = await User.findOne({ userId })
    return existUser
}




export const User = model<TUser, UserModel>('User', userSchema)