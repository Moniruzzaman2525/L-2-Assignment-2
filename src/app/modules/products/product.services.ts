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

// single product get services
const getSingleIntoDB = async(id: string) => {
    const result = await Products.findById(id)
    return result
}

// update product 
const updateProductIntoDB = async (updateData: Partial<TProduct>, productId: string) => {
    const result = await Products.findByIdAndUpdate(
        productId,
        updateData,
        {new: true, runValidators: true}
    )
    if (!result) {
        return null
    }
    return result
}

export const ProductsServices = {
    createProductIntoDB,
    getAllProductIntoDB,
    getSingleIntoDB,
    updateProductIntoDB

}