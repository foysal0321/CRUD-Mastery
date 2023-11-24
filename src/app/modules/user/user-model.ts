import {Schema, model} from 'mongoose'
import { TAddress, TFullname, TOrder, TUser } from './user-interface'

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

const userSchema = new Schema<TUser>({
    userId:{
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
        type: String
    },
    isActive: {
        type: Boolean
    },
    hobbies: {
        type: [String],
    },
    address: adressSchema,
    // order: {
    //     type: [orderSchema]
    // }
})

export const UserModel = model<TUser>('User', userSchema)