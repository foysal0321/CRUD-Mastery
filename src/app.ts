import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()

app.use(express.json())
app.use(cors())


app.get('/', (req: Request, res: Response)=> {
    res.send('Server is running')
})

app.post('/user', (req: Request, res: Response)=> {
    const user = req.body
    res.send(user)
})


export default app;