import { Types } from 'mongoose';

// Stationery Order Interface
export interface TOrder {
  email: string;
  product: Types.ObjectId;
  quantity: number;
  totalPrice: number;
  created_at?: Date;
  updated_at?: Date;
}
