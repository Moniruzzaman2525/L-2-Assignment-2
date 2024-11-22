import { z } from 'zod';

// Define the Zod schema
const productZodSchema = z.object({
  // id: z.string().min(1, { message: 'Student ID is required' }),
  name: z.string().min(1, { message: 'Name is required' }),
  brand: z.string().min(1, { message: 'Brand is required' }),
  price: z.number().positive({ message: 'Price must be a positive number' }),
  category: z.enum(['Writing', 'Office Supplies', 'Art Supplies', 'Educational', 'Technology']),
  description: z.string().min(1, { message: 'Description is required' }),
  quantity: z.number().int().positive({ message: 'Quantity must be a positive integer' }),
  inStock: z.boolean().default(true),
});

export default productZodSchema