const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    nickname: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    car_owned: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    elec_car_owned: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    average_mileage: {
      type: DataTypes.FLOAT,
    },
  },
  {
    timestamps: true,
    tableName: "users",
    charset: "utf8",
    collate: "utf8_general_ci",
    paranoid: true
  }
);

module.exports = User;
