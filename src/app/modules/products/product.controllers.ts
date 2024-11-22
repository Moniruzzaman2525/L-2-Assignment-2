import { NextFunction, Request, Response } from "express";
import productZodSchema from "./product.zod.validation";
import { productsServices } from "./product.services";


// create product api
const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const productData = req.body
        const result = await productsServices.createProductIntoDB(productData)
        res.status(200).json({
            message: 'Product created successfully',
            success: true,
            data: result
        })

    } catch (error) {
        next(error)
    }
}


// get all products
const getAllProducts = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {searchTerm} = req.query
        let query = {}
        
        if (searchTerm) {
            query = {
                $or: [
                    {name: {$regex: searchTerm, $options: 'i'}},
                    { brand: { $regex: searchTerm, $options: 'i' } },
                    { category: { $regex: searchTerm, $options: 'i' } }
                ]
            }
        }

        const result = await productsServices.getAllProductIntoDB(query)
        res.status(200).json({
            message: 'Products retrieved successfully"',
            success: true,
            data: result
        })

    } catch (error) {
        next(error)
    }
}

export const ProductsControllers = {
    createProduct,
    getAllProducts
}