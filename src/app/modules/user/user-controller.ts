import { Request, Response } from "express";
import { userService } from "./user-service";
import { userValidate } from "./validation-zod";

const createUser = async (req: Request, res: Response) => {
    try {
        const user = req.body

        const userValidateData = userValidate.userSchema.parse(user)
        const result = await userService.createUserDB(userValidateData)

        res.status(200).json({
            success: true,
            message: 'success',
            data: result

        })

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Something was wrong",
            error: err
        })
    }
}

const getUser = async (req: Request, res: Response) => {
    try {
        const result = await userService.getUserDB()

        res.status(200).json({
            success: true,
            message: 'success',
            data: result
        })

    } catch (err) {
        console.log(err);
    }
}

const getSingleUser = async (req: Request, res: Response) => {
    try {
        const user = req.params.userId
        const result = await userService.getSingleUserDB(user)

        res.status(200).json({
            success: true,
            message: 'success',
            data: result
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "User not found",
            error: {
                code: 404,
                description: "User not found!"
            }
        })
    }
}

const updateUser = async (req: Request, res: Response) => {
    try {
        const result = ''

        res.status(200).json({
            success: true,
            message: 'success',
            data: result
        })

    } catch (err) {
        console.log(err);
    }
}

const deleteUser = async (req: Request, res: Response) => {
    try {
        const result = await userService.getUserDB()

        res.status(200).json({
            success: true,
            message: 'success',
            data: result
        })

    } catch (err) {
        console.log(err);
    }
}


export const userController = {
    createUser,
    getUser,
    getSingleUser,
    updateUser,
    deleteUser
}