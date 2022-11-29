require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "elicewebproject3",
  "root",
  process.env.MYSQL_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = sequelize;
