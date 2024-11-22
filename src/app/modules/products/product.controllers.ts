import { NextFunction, Request, Response } from "express";
import { ProductsServices } from "./product.services";

// Create a Stationery Product controller
const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const productData = req.body
        const result = await ProductsServices.createProductIntoDB(productData)
        res.status(200).json({
            message: 'Product created successfully',
            success: true,
            data: result
        })

    } catch (error) {
        next(error)
    }
}

// Get All Stationery Products controller
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

        const result = await ProductsServices.getAllProductIntoDB(query)
        
        res.status(200).json({
            message: 'Products retrieved successfully"',
            success: true,
            data: result
        })

    } catch (error) {
        next(error)
    }
}


// Get a Specific Stationery Product controller
const getSingleProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { productId } = req.params

        const result = await ProductsServices.getSingleIntoDB(productId)

        // product not found
        if (!result) {
            res.status(404).json({
                message: 'Product not found',
                success: false,
            })
            return
        }

        res.status(200).json({
            message: 'Product retrieved successfully',
            success: true,
            data: result
        })

    } catch (error) {
        next(error)
    }
}

 
// Update a Stationery Product controller
const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { productId } = req.params
        const updateProduct = req.body

        const result = await ProductsServices.updateProductIntoDB(updateProduct, productId)

        // product not found
        if (!result) {
            res.status(404).json({
                message: 'Product not found',
                success: false,
            })
            return
        }

        // update response 
        res.status(200).json({
            message: 'Product updated successfully',
            success: true,
            data: result
        })

    } catch (error) {
        next(error)
    }
}

// Delete a Stationery Product controller
const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { productId } = req.params
        const result = await ProductsServices.deleteProductFromDB(productId)
        
        // product not found
        if (!result) {
            res.status(404).json({
                message: 'Product not found',
                success: false,
            }) 
            return
        }

        res.status(200).json({
            message: 'Product deleted successfully',
            success: true,
            data: {}
        })
    } catch (error) {
        next(error)
    }
}

// export Stationery Product Controller
export const ProductsControllers = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct
}