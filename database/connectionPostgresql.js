const Sequelize = require('sequelize');
const { leadModel, purchaseorderModel } = require('./models/bonitaBusiness.Model');

const isProduction = process.env.NODE_ENV === 'production';
const connectionString = `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`;
console.log(isProduction ? 'isProduction: ' + connectionString : connectionString);

const sequelize = new Sequelize(connectionString, {
  define: {
    timestamps: false
  },
  // disable logging; default: console.log
  logging: false,
  dialect: 'postgres',
  dialectOptions: {
    useUTC: false
  },
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  timezone: '-05:00'
});

const Lead = leadModel(sequelize, Sequelize);
const PurchaseOrder = purchaseorderModel(sequelize, Sequelize);

module.exports = {
  sequelize,
  Lead,
  PurchaseOrder
};
