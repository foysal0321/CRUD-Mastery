import express  from "express";
import { userController } from "./user-controller";


const router = express.Router()

router.post('/api/users', userController.createUser)
router.get('/users', userController.getUser)

export const userRouter = router