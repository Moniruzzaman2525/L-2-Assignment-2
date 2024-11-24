import express, { Application } from 'express';
import cors from 'cors';
import { productRoute } from './app/modules/products/product.route';
import errorHandler from './utils/errorHandler';
import { OrderRoutes } from './app/modules/order/order.route';
import notFoundRoute from './utils/notFound';

const app: Application = express();
app.use(cors());
app.use(express.json());

// Product route
app.use('/api', productRoute);

// Order Route
app.use('/api', OrderRoutes);

// checking route 
app.get("/", (req, res) => {
    res.send("Hello World, Its working good");
});

// not found route
app.use('*', notFoundRoute)
// Error handler
app.use(errorHandler);

export default app;
