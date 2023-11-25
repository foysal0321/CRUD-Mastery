import { TUser } from "./user-interface";
import { User } from "./user-model";

const createUserDB = async (user: TUser) => {
    const result = await User.create(user)
    return result
};

const getUserDB = async () => {
    const result = await User.find()
    return result
};

const getSingleUserDB = async (userId: any) => {
    const result = await User.findOne({ userId })
    return result
};

const updateUserDB = async (userId: string, updateData: TUser) => {
    const result = await User.findOneAndUpdate({ userId }, {$set: updateData})
    return result
};

const deleteUserDB = async (userId: string) => {
    const result = await User.findOneAndDelete({ userId })
    return result
};

//-------- user order -------

const createProductUserDB = async (userId: string, updateOrder: TUser) => {
    const result = await User.findOneAndUpdate({userId}, {$push: {orders: updateOrder} })
    return result
}

const getOrderUserDB = async (userId: string) => {
    const id = Number(userId)
    const result = await User.aggregate([
       {
        $match : {userId: id}
       }
    ]).project({orders: 1})
    return result
}

const getTotalpriceOrderDB = async (userId: string) => {
    const id = Number(userId)
    const result = await User.aggregate([
        { $match: { userId: id } },
        { $unwind: '$orders' },
        {
          $group: {
            _id: null,
            totalPrice: {
              $sum: { $multiply: ['$orders.price', '$orders.quantity'] },
            },
          },
        },
      ])
      return result
}


export const userService = {
    createUserDB,
    getUserDB,
    getSingleUserDB,
    updateUserDB,
    deleteUserDB,
    createProductUserDB,
    getOrderUserDB,
    getTotalpriceOrderDB
}