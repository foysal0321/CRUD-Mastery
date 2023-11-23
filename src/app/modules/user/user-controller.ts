import { Request, Response } from "express";
import { userService } from "./user-service";

const createUser = async (req: Request, res: Response) => {
    try{
        const user = req.body
        const result = await userService.createUserDB(user)

        res.status(200).json({
            success: true,
            message: 'success',          
            data: result
        })

    } catch(err){
        console.log(err);       
    }
}

const getUser = async (req: Request, res: Response) => {
    try{
        const result = await userService.getUserDB()

        res.status(200).json({
            success: true,
            message: 'success',
            data: result
        })

    } catch(err){
        console.log(err);       
    }
}

export const userController = {
    createUser,
    getUser
}