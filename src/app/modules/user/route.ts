import express from "express";
import { userController } from "./user-controller";


const router = express.Router()

router.post('/api/users', userController.createUser)
router.get('/api/users', userController.getUser)
router.get('/api/users/:userId', userController.getSingleUser)
router.put('/api/users/:userId', userController.updateUser)
router.delete('/api/users/:userId', userController.deleteUser)

// user orders route
router.put('/api/users/:userId/orders', userController.addProductOrder)
router.get('/api/users/:userId/orders', userController.getAllOrdersUser)
router.get('/api/users/:userId/orders/total-price', userController.getTotalpriceOrder)


export const userRouter = router