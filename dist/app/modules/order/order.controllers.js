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
exports.OrderControllers = void 0;
const order_services_1 = require("./order.services");
// Order a Stationery Product controller
const orderProductController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const result = yield order_services_1.ordersServices.orderProductService(orderData);
        res.status(200).json({
            message: 'Order created successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// Calculate Revenue from Orders controller
const revenueGenerateController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_services_1.ordersServices.getTotalRevenueFromDB();
        res.status(200).json({
            message: 'Revenue calculated successfully',
            status: true,
            data: { totalRevenue: result },
        });
    }
    catch (error) {
        next(error);
    }
});
// export order controllers
exports.OrderControllers = {
    orderProductController,
    revenueGenerateController,
};
