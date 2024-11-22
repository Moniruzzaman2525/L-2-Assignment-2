import express from 'express'
import { ProductsControllers } from './product.controllers'

const router = express.Router()

// Create a Stationery Product Router
router.post('/products', ProductsControllers.createProduct)

// Get All Stationery Products Router
router.get('/products', ProductsControllers.getAllProducts)

// Get a Specific Stationery Product Router
router.get('/products/:productId', ProductsControllers.getSingleProduct)

// Update a Stationery Product Router
router.put('/products/:productId', ProductsControllers.updateProduct)

// Delete a Stationery Product Router
router.delete('/products/:productId', ProductsControllers.deleteProduct)


export const productRoute = router