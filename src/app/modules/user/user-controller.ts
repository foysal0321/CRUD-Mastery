import { Request, Response } from "express";
import { userService } from "./user-service";
import { userValidate } from "./user-validation";
import { TOrder, TUser } from "./user-interface";

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
            message: "Something was wrong!",
            error: err
        })
    }
}

const getUser = async (req: Request, res: Response) => {
    try {
        const result = await userService.getUserDB()

        res.status(200).json({
            success: true,
            message: 'Users fetched successfully!',
            data: result
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "User not found",
            error: err
        })
    }
}

const getSingleUser = async (req: Request, res: Response) => {
    try {
        const user = req.params.userId
        const result = await userService.getSingleUserDB(user)

      if(await !result?.isUserExist(user)){
        throw new Error ('User not found!')
      }
        res.status(200).json({
            success: true,
            message: 'User fetched successfuly',
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
        const user = req.params.userId
        const updateData: TUser = req.body 
         const result = await userService.updateUserDB(user, updateData)

        res.status(200).json({
            success: true,
            message: 'success',
            data: result
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Something was wrong!",
            error: err
        })
    }
}

const deleteUser = async (req: Request, res: Response) => {
    try {
        const user = req.params.userId
        const result = await userService.deleteUserDB(user)

        if(''){
           throw new Error ('error')
        }

        res.status(200).json({
            success: true,
            message: 'User delete success',
            data: result
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Something was wrong',
            error: err
        })
    }
}

//-------- user orders -------------
const addProductOrder = async (req: Request, res: Response) => {
    try {
        const user = req.params.userId
        const updateOrder = req.body
        const result = await userService.createProductUserDB(user, updateOrder)
        console.log(result);
        
        res.status(200).json({
            success: true,
            message: 'Product created success',
            data: result
        })
    } catch (err) {
       console.log(err);
       
    }
}

const getAllOrdersUser = async (req: Request, res: Response) => {
    try {


        res.status(200).json({
            success: true,
            message: 'User delete success',
            data: ''
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Something was wrong',
            error: err
        })
    }
}

const getTotalpriceOrder = async (req: Request, res: Response) => {
    try {


        res.status(200).json({
            success: true,
            message: 'User delete success',
            data: ''
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Something was wrong',
            error: err
        })
    }
}



export const userController = {
    createUser,
    getUser,
    getSingleUser,
    updateUser,
    deleteUser,
    addProductOrder,
    getAllOrdersUser,
    getTotalpriceOrder
}