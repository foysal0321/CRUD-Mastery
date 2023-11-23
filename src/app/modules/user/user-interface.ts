export type TFullname = {  
    firstName: string
    lastName: string  
}
export type TAddress = {  
    street: string
    city: string
    country: string
}

export  type TUser = {
    userId: number
    username: string
    password: string
    fullName: TFullname
    age: number
    email: string
    isActive: boolean
    hobbies: string[]
    address: TAddress
    order?: []
}
