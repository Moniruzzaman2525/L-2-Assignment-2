import { Schema, model } from "mongoose";
import { TStationery } from "./stationeryInterface";

const stationerySchema = new Schema<TStationery>({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    brand: {
        type: String,
        required: [true, 'Brand is required']
    },
    price: {
        type: Number,
        required: [true, 'Price is required']
    },
    category: {
        type: String,
        enum: {
            values: ['Writing' , 'Office Supplies' , 'Art Supplies' , 'Educational' , 'Technology']
        }
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required']
    },
    inStock: {
        type: Boolean,
        required: [true, 'In Stack is required']
    }
})

export const Stationery = model<TStationery>('Stationery', stationerySchema)