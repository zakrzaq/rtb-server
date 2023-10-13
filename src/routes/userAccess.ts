import { Router, Request, Response, NextFunction } from 'express';
import {
  createUserAccess,
  getUserAccesses,
  getUserAccessById,
  deleteUserAccess,
  updateUserAccess,
} from '../controllers/userAccess';

const router = Router();

router.get('/', (_, res: Response, next: NextFunction) => getUserAccesses(res, next));

router.get('/:userId', (req: Request, res: Response, next: NextFunction) => getUserAccessById(req, res, next));

router.post('/', (req: Request, res: Response, next: NextFunction) => createUserAccess(req, res, next));

router.delete('/:userId', (req: Request, res: Response, next: NextFunction) => deleteUserAccess(req, res, next));

router.patch('/:userId', (req: Request, res: Response, next: NextFunction) => updateUserAccess(req, res, next));

export { router as userAccessRouter };
