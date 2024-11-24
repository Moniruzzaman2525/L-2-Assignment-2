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
exports.ProductsControllers = void 0;
const product_services_1 = require("./product.services");
// Create a Stationery Product controller
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const result = yield product_services_1.ProductsServices.createProductIntoDB(productData);
        res.status(200).json({
            message: 'Product created successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// Get All Stationery Products controller
const getAllProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        let query = {};
        if (searchTerm) {
            query = {
                $or: [
                    { name: { $regex: searchTerm, $options: 'i' } },
                    { brand: { $regex: searchTerm, $options: 'i' } },
                    { category: { $regex: searchTerm, $options: 'i' } },
                ],
            };
        }
        const result = yield product_services_1.ProductsServices.getAllProductIntoDB(query);
        res.status(200).json({
            message: 'Products retrieved Successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// Get a Specific Stationery Product controller
const getSingleProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_services_1.ProductsServices.getSingleIntoDB(productId);
        // product not found
        if (!result) {
            res.status(404).json({
                message: 'Product not found',
                success: false,
            });
            return;
        }
        res.status(200).json({
            message: 'Product retrieved successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// Update a Stationery Product controller
const updateProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updateProduct = req.body;
        const result = yield product_services_1.ProductsServices.updateProductIntoDB(updateProduct, productId);
        // product not found
        if (!result) {
            res.status(404).json({
                message: 'Product not found',
                success: false,
            });
            return;
        }
        // update response
        res.status(200).json({
            message: 'Product updated successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// Delete a Stationery Product controller
const deleteProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_services_1.ProductsServices.deleteProductFromDB(productId);
        // product not found
        if (!result) {
            res.status(404).json({
                message: 'Product not found',
                success: false,
            });
            return;
        }
        res.status(200).json({
            message: 'Product deleted successfully',
            success: true,
            data: {},
        });
    }
    catch (error) {
        next(error);
    }
});
// export Stationery Product Controller
exports.ProductsControllers = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
};
