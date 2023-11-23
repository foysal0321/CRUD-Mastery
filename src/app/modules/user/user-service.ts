import { TUser } from "./user-interface";
import { UserModel } from "./user-model";

const createUserDB = async (user: TUser) => {
    const result = await UserModel.create(user)
    return result
}

const getUserDB = async () => {
    const result = await UserModel.find()
    return result
}

export const userService = {
    createUserDB,
    getUserDB
}