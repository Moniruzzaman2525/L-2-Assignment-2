import { Products } from './product.module';
import { TProduct } from './productInterface';

// Create a Stationery Product Services
const createProductIntoDB = async (productData: TProduct) => {
  const product = new Products(productData);
  const result = await product.save();
  return result;
};

// Get All Stationery Products Services
const getAllProductIntoDB = async (query: object) => {
  const result = await Products.find(query);
  return result;
};

// Get a Specific Stationery Product Services
const getSingleIntoDB = async (productId: string) => {
  const result = await Products.findById(productId);
  return result;
};

// Update a Stationery Product Services
const updateProductIntoDB = async (
  updateData: Partial<TProduct>,
  productId: string,
) => {
  // check: quantity is there then set isStock true
  if (updateData.quantity !== undefined) {
    updateData.inStock = true;
  }

  // update product use by id and update product data
  const result = await Products.findByIdAndUpdate(productId, updateData, {
    new: true,
  });

  if (!result) {
    return null;
  }
  return result;
};

// Delete a Stationery Product Services
const deleteProductFromDB = async (productId: string) => {
  const result = await Products.findByIdAndDelete(productId);
  if (!result) {
    return false;
  }
  return result;
};

// export Stationery Product Services
export const ProductsServices = {
  createProductIntoDB,
  getAllProductIntoDB,
  getSingleIntoDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
