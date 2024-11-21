import { Request, Response } from "express";


// order create controllers
const createOrder = async (req: Request, res: Response) => {
    try {
        const {order: orderData} = req.body

    } catch (error) {
        console.log(error);
        
    }
}


// 
export const OrderControllers = {
    createOrder
}