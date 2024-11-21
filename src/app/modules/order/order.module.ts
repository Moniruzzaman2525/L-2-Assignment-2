import { Schema, model } from "mongoose";
import { TOrder } from "./orderInterface";

const orderSchema = new Schema<TOrder>({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    product: {
        type: String,
        required: [true, 'Product Id is required']
    },
    totalPrice: {
        type: Number,
        required: [true, 'Total price is required']
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required']
    }
})

export const Orders = model<TOrder>('Orders', orderSchema)