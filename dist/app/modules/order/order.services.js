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
exports.ordersServices = void 0;
const order_module_1 = require("./order.module");
// Order a Stationery Product Services
const orderProductService = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const order = new order_module_1.Orders(orderData);
    const result = yield order.save();
    return result;
});
// Calculate Revenue from Orders Services
const getTotalRevenueFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_module_1.Orders.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: '$totalPrice' },
            },
        },
    ]);
    const totalRevenue = result.length > 0 ? result[0].totalRevenue : 0;
    return totalRevenue;
});
exports.ordersServices = {
    orderProductService,
    getTotalRevenueFromDB,
};
