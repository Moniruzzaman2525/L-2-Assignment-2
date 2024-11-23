import { Orders } from './order.module';
import { TOrder } from './orderInterface';

// Order a Stationery Product Services
const orderProductService = async (orderData: TOrder) => {
  const order = new Orders(orderData);
  const result = await order.save();
  return result;
};

// Calculate Revenue from Orders Services
const getTotalRevenueFromDB = async () => {
  const result = await Orders.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ]);

  const totalRevenue = result.length > 0 ? result[0].totalRevenue : 0;
  return totalRevenue;
};

export const ordersServices = {
  orderProductService,
  getTotalRevenueFromDB,
};
