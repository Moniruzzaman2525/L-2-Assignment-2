import express from 'express'
import { ProductsControllers } from './product.controllers'

const router = express.Router()

router.post('/products', ProductsControllers.createProduct)
router.get('/products', ProductsControllers.getAllProducts)
router.get('/products/:productId', ProductsControllers.getSingleProduct)


export const productRoute = router