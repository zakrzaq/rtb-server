import { Router, Response } from 'express';
import serverInfo from '../helpers/serverInfo';

const router = Router();

router.get('/', (_, res: Response) => {
  res.status(200).json(serverInfo);
});

export { router as rootRouter };

