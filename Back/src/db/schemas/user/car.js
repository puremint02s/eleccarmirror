import { DataTypes } from "sequelize";
import sequelize from "../../../config/db";

const Car = sequelize.define(
    "Car",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      brand: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      model: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      car_image: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {

    indexes: [{
      unique: true,
      fields: ["model"]
    }],
    tableName: "cars",
    charset: "utf8",
    collate: "utf8_general_ci",
    paranoid: true
    }
  );
  
  export default Car;
  