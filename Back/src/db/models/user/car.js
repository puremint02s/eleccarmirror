const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db");

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
        unique: true,
      },
      car_image: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
    tableName: "cars",
    charset: "utf8",
    collate: "utf8_general_ci",
    paranoid: true
    }
  );
  
  module.exports = Car;
  