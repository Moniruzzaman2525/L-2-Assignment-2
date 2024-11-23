import express, { Application } from 'express';
import cors from 'cors';
import { productRoute } from './app/modules/products/product.route';
import errorHandler from './utils/errorHandler';
import { OrderRoutes } from './app/modules/order/order.route';

const app: Application = express();
app.use(cors());
app.use(express.json());

// Product route
app.use('/api', productRoute);

// Order Route
app.use('/api', OrderRoutes);

// Error handler
app.use(errorHandler);

export default app;
