import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(process.env.BACKEND_DB_NAME, process.env.BACKEND_DB_USER, process.env.BACKEND_DB_PASSWORD, {
  dialect: 'mysql',
  host: process.env.BACKEND_DB_HOST,
  define: {
    timestamps: false,
    freezeTableName: true,
  },
  dialectOptions: {
    dateStrings: true,
    typeCast: true,
  },
  timezone: 'America/New_York',
});
sequelize.authenticate()

export const fesequelize = new Sequelize(process.env.FRONTEND_DB_NAME, process.env.FRONTEND_DB_USER, process.env.FRONTEND_DB_PASSWORD, {
  dialect: 'mysql',
  host: process.env.FRONTEND_DB_HOST,
  define: {
    timestamps: false,
    freezeTableName: true,
  }
});
fesequelize.authenticate()