"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = require("./app/modules/products/product.route");
const errorHandler_1 = __importDefault(require("./utils/errorHandler"));
const order_route_1 = require("./app/modules/order/order.route");
const notFound_1 = __importDefault(require("./utils/notFound"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Product route
app.use('/api', product_route_1.productRoute);
// Order Route
app.use('/api', order_route_1.OrderRoutes);
// checking route 
app.get("/", (req, res) => {
    res.send("Hello World");
});
// not found route
app.use('*', notFound_1.default);
// Error handler
app.use(errorHandler_1.default);
exports.default = app;
