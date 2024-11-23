"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoute = void 0;
const express_1 = __importDefault(require("express"));
const product_controllers_1 = require("./product.controllers");
const router = express_1.default.Router();
// Create a Stationery Product Router
router.post('/products', product_controllers_1.ProductsControllers.createProduct);
// Get All Stationery Products Router
router.get('/products', product_controllers_1.ProductsControllers.getAllProducts);
// Get a Specific Stationery Product Router
router.get('/products/:productId', product_controllers_1.ProductsControllers.getSingleProduct);
// Update a Stationery Product Router
router.put('/products/:productId', product_controllers_1.ProductsControllers.updateProduct);
// Delete a Stationery Product Router
router.delete('/products/:productId', product_controllers_1.ProductsControllers.deleteProduct);
exports.productRoute = router;
