import { Products } from "./product.module";
import { TProduct } from "./productInterface";

// product create services
const createProductIntoDB = async (productData: TProduct) => {
    const product = new Products(productData)
    const result = await product.save()
    return result
}

// product get services
const getAllProductIntoDB = async(query: object) => {
    const result = await Products.find(query)
    return result
}

export const productsServices = {
    createProductIntoDB,
    getAllProductIntoDB
}