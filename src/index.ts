import express, { Response } from 'express';
import serverInfo from './helpers/serverInfo';

const port = process.env.PORT || 3030;
const app = express();

app.use(express.json());

app.get('/', (_, res: Response) => {
  res.status(200).json(serverInfo);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
