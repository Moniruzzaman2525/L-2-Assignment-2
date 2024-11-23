"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsServices = void 0;
const product_module_1 = require("./product.module");
// Create a Stationery Product Services
const createProductIntoDB = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const product = new product_module_1.Products(productData);
    const result = yield product.save();
    return result;
});
// Get All Stationery Products Services
const getAllProductIntoDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_module_1.Products.find(query);
    return result;
});
// Get a Specific Stationery Product Services
const getSingleIntoDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_module_1.Products.findById(productId);
    return result;
});
// Update a Stationery Product Services
const updateProductIntoDB = (updateData, productId) => __awaiter(void 0, void 0, void 0, function* () {
    // check: quantity is there then set isStock true
    if (updateData.quantity !== undefined) {
        updateData.inStock = true;
    }
    // update product use by id and update product data
    const result = yield product_module_1.Products.findByIdAndUpdate(productId, updateData, {
        new: true,
    });
    if (!result) {
        return null;
    }
    return result;
});
// Delete a Stationery Product Services
const deleteProductFromDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_module_1.Products.findByIdAndDelete(productId);
    if (!result) {
        return false;
    }
    return result;
});
// export Stationery Product Services
exports.ProductsServices = {
    createProductIntoDB,
    getAllProductIntoDB,
    getSingleIntoDB,
    updateProductIntoDB,
    deleteProductFromDB,
};
