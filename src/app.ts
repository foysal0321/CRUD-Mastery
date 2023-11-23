import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { userRouter } from './app/modules/user/route'
const app: Application = express()

app.use(express.json())
app.use(cors())
app.use(userRouter)


app.get('/', (req: Request, res: Response)=> {
   res.send('server is running')
})


export default app





//////

// {
//     "userId": 1,
//     "username": "john_doe",
//     "password": "$2b$12$3fJyHTgM8QgU.q.tlpNVyOf.hJYfhVe7XPGCHm9Wq1RmexUZbUEeu",
//     "fullName": {
//         "firstName": "John",
//         "lastName": "Doe"
//     },
//     "age": 30,
//     "email": "john.doe@example.com",
//     "isActive": true,
//     "hobbies": [
//         "reading",
//         "traveling"
//     ],
//     "address": {
//         "street": "123 Main St",
//         "city": "Anytown",
//         "country": "USA"
//     },
//     "orders": [
//         {
//             "productName": "Product 1",
//             "price": 23.56,
//             "quantity": 2
//         },
//         {
//             "productName": "Product 2",
//             "price": 23.56,
//             "quantity": 5
//         }
//     ]
// },