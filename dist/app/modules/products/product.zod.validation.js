"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
// Define the Zod schema
const productZodSchema = zod_1.z.object({
    // id: z.string().min(1, { message: 'Student ID is required' }),
    name: zod_1.z.string().min(1, { message: 'Name is required' }),
    brand: zod_1.z.string().min(1, { message: 'Brand is required' }),
    price: zod_1.z.number().positive({ message: 'Price must be a positive number' }),
    category: zod_1.z.enum(['Writing', 'Office Supplies', 'Art Supplies', 'Educational', 'Technology']),
    description: zod_1.z.string().min(1, { message: 'Description is required' }),
    quantity: zod_1.z.number().int().positive({ message: 'Quantity must be a positive integer' }),
    inStock: zod_1.z.boolean().default(true),
});
exports.default = productZodSchema;
