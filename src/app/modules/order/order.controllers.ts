import { NextFunction, Request, Response } from 'express';
import { ordersServices } from './order.services';

// Order a Stationery Product controller
const orderProductController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const orderData = req.body;
    const result = await ordersServices.orderProductService(orderData);
    res.status(200).json({
      message: 'Order created successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Calculate Revenue from Orders controller
const revenueGenerateController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await ordersServices.getTotalRevenueFromDB();

    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: { totalRevenue: result },
    });
  } catch (error) {
    next(error);
  }
};

// export order controllers
export const OrderControllers = {
  orderProductController,
  revenueGenerateController,
};
