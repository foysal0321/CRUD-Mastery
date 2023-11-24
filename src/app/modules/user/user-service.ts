import { TUser } from "./user-interface";
import { User } from "./user-model";

const createUserDB = async (user: TUser) => {
    const result = await User.create(user)

    return result
}

const getUserDB = async () => {
    const result = await User.find()
    return result
}

const getSingleUserDB = async (userId: any) => {

    // const result = await User.findOne({userId})
    // return result

    const newUser = new User(userId)
    if (await newUser.isUserExist(userId)) {
        const result = await User.findOne({ userId })
        return result
    } else {
        throw new Error('User not exist')
    }
}

const updateUserDB = async (userId: string) => {
    const result = await User.updateOne({ userId })
    return result
}

const deleteUserDB = async (userId: string) => {
    const result = await User.deleteOne({ userId })
    return result
}


export const userService = {
    createUserDB,
    getUserDB,
    getSingleUserDB,
    updateUserDB,
    deleteUserDB
}