import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { userRouter } from './app/modules/user/route'
const app: Application = express()

app.use(express.json())
app.use(cors())

// application router
app.use(userRouter)


app.get('/', (req: Request, res: Response) => {
   res.send('Server is running')
})


export default app
