import dotenv from "dotenv"
dotenv.config();
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "elicewebproject3",
  "root",
  process.env.MYSQL_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    logging: false
  }
);

export default sequelize;
