"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const mongoose_1 = require("mongoose");
// Stationery Product Schema
const productsSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    brand: {
        type: String,
        required: [true, 'Brand is required'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be a positive number'],
        validate: {
            validator: (value) => value >= 0,
            message: 'Price must be a non-negative number',
        },
    },
    category: {
        type: String,
        enum: {
            values: [
                'Writing',
                'Office Supplies',
                'Art Supplies',
                'Educational',
                'Technology',
            ],
        },
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
        min: [0, 'Price must be a positive number'],
        validate: {
            validator: (value) => value >= 0,
            message: 'Price must be a non-negative number',
        },
    },
    inStock: {
        type: Boolean,
        default: true,
        // required: [true, 'In Stack is required']
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
});
// Stationery Product Model
exports.Products = (0, mongoose_1.model)('Products', productsSchema);
