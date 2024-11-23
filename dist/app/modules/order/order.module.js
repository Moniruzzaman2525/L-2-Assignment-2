"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orders = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    product: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Stationery",
        required: [true, 'Product Id is required']
    },
    totalPrice: {
        type: Number,
        required: [true, 'Total price is required']
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required']
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    }
});
exports.Orders = (0, mongoose_1.model)('Orders', orderSchema);
