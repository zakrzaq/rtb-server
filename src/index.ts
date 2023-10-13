import './util/env';
import express from 'express';
import cors from 'cors';
import errorHandler from './util/errorHandler';
import { rootRouter } from './routes/index';
import { userAccessRouter } from './routes/userAccess';
import { connectDb } from './util/db';

const port = process.env.PORT ? parseInt(process.env.PORT) : 3030;
const hostname = process.env.HOSTNAME || '0.0.0.0';
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(cors());

app.use('/', rootRouter);
app.use('/api/user-access', userAccessRouter);

app.use(errorHandler);

connectDb();

app.listen(port, hostname, () => {
  console.log(`Server running on http://${hostname}:${port}`);
});
