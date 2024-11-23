import { Request, Response } from 'express';

// Not Found Middleware
const notFoundRoute = (req: Request, res: Response) => {
  res.status(404).json({
    message: 'Route not found',
    success: false,
  });
};

export default notFoundRoute;
