require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;