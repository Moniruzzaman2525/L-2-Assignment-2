import express from 'express';
import { OrderControllers } from './order.controllers';

const router = express.Router();

// Order a Stationery Product Router
router.post('/orders', OrderControllers.orderProductController);
// Calculate Revenue from Orders Router
router.get('/orders/revenue', OrderControllers.revenueGenerateController);

export const OrderRoutes = router;
