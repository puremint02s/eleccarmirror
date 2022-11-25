require("dotenv").config();
const { Sequelize } = require("sequelize");
const User = require("./schemas/user");

const sequelize = new Sequelize(
  "elicewebproject3",
  "root",
  process.env.MYSQL_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

const db = {}

db.sequelize = sequelize;
db.User = User;

User.init(sequelize);

sequelize.sync({ force: false }).then(() => {
    console.log('✅Connection has been established successfully');
 }).catch((error) => {
    console.error('⛔Unable to connect to the database: ', error);
 });
