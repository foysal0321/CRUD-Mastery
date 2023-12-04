import { z } from 'zod'

const fullnameSchema = z.object({
    firstName: z.string(),
    lastName: z.string()
})

const addressSchema = z.object({
    street: z.string(),
    city: z.string(),
    country: z.string()
})

const orderSchema = z.array(z.object({
    productName: z.string(),
    price: z.number(),
    quantity: z.number()
}))

const hobbieSchema = z.array(z.string())

const userSchema = z.object({
    userId: z.number(),
    username: z.string(),
    password: z.string(),
    fullName: fullnameSchema.required(),
    age: z.number(),
    email: z.string().email(),
    isActive: z.boolean(),
    hobbies: hobbieSchema,
    address: addressSchema,
    orders: orderSchema.optional()
})


export const userValidate = {
    userSchema
}