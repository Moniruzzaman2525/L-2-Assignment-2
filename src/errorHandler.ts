// Error Handler
import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    message: err._message,
    success: false,
    error: err || 'Something went wrong',
  });
};

export default errorHandler; 
