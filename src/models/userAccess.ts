import Sequelize from 'sequelize';
import { db } from '../util/db';

export const UserAccess = db.define(
  'userAccess',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    userId: Sequelize.STRING,
    elementSeen: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    freezeTableName: true,
  },
);
