"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const order_controllers_1 = require("./order.controllers");
const router = express_1.default.Router();
// Order a Stationery Product Router
router.post('/orders', order_controllers_1.OrderControllers.orderProductController);
// Calculate Revenue from Orders Router
router.get('/orders/revenue', order_controllers_1.OrderControllers.revenueGenerateController);
exports.OrderRoutes = router;
