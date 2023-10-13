import { UserAccess } from '../models/userAccess';
import { NextFunction, Response } from 'express';

export const getReport = async (res: Response, next: NextFunction) => {
  try {
    const total = await UserAccess.count();
    const totalSeen = await UserAccess.count({ where: { elementSeen: true } });
    const seenPercentage = ((totalSeen / total) * 100).toFixed(2);

    return res.status(200).json({ total, seenPercentage });
  } catch (err) {
    next(err);
  }
};
