import { Request, Response } from "express";


// create product api
const createProduct = async (req: Request, res: Response) => {
    try {
        const {stationery: stationeryData} = req.body

    } catch (error) {
        console.log(error);
        
    }
}



export const ProductsControllers = {
    createProduct
}