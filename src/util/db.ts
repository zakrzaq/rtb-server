import { Sequelize } from 'sequelize';

const dbName = process.env.POSTGRES_DB || '';
const dbUser = process.env.POSTGRES_USER || '';
const dbPassword = process.env.POSTGRES_PASSWORD || '';

export const db = new Sequelize(dbName, dbUser, dbPassword, {
  host: 'localhost',
  dialect: 'postgres',
});

export const connectDb = () => {
  db.sync()
    .then(() => console.log('Database connected'))
    .catch((err: unknown) => console.log(err));
};
