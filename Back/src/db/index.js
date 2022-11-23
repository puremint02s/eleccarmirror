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

sequelize.authenticate().then(() => {
    console.log('✅Connection has been established successfully');
 }).catch((error) => {
    console.error('⛔Unable to connect to the database: ', error);
 });

let Dummy = sequelize.define('dummy', {
    description: Sequelize.STRING
});

Dummy.sync().then(() => {
    console.log('New table created');
}).finally(() => {
    sequelize.close();
})