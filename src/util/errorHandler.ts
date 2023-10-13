import { Request, Response } from 'express';

export interface DefaultError extends Error {
  statusCode: number;
  message: string;
}

const errorHandler = (err: DefaultError, req: Request, res: Response) => {
  const errStatus = err.statusCode || 500;
  const errMessage = err.message || 'Something went wrong';
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
  });
};

export default errorHandler;
