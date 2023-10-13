import { Sequelize } from 'sequelize';

const dbName = process.env.POSTGRES_DB || '';
const dbUser = process.env.POSTGRES_USER || '';
const dbPassword = process.env.POSTGRES_PASSWORD || '';

const dbHost =
  process.env.ENVIRONMENT === 'docker'
    ? process.env.POSTGRES_HOST_DOCKER || 'postgres'
    : process.env.POSTGRES_HOST_DEV || 'localhost';

export const db = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: 'postgres',
});

export const connectDb = () => {
  db.sync()
    .then(() => console.log('Database connected'))
    .catch((err: unknown) => console.log(err));
};
