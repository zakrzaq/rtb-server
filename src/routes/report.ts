import { Router, Response, NextFunction } from 'express';
import { getReport } from '../controllers/report'

const router = Router();

router.get('/', (_, res: Response, next: NextFunction) => getReport(res, next));

export { router as reportRouter };

