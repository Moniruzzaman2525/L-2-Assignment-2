import express from 'express'
import { ProductsControllers } from './product.controllers'

const router = express.Router()

router.post('/products', ProductsControllers.createProduct)
router.get('/products', ProductsControllers.getAllProducts)


export const productRoute = router