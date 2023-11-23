import {Schema, model} from 'mongoose'
import { TAddress, TFullname, TUser } from './user-interface'

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

const userSchema = new Schema<TUser>({
    userId:{
        type: Number
    },
    username: {
        type: String
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
    address: adressSchema
})

export const UserModel = model<TUser>('User', userSchema)