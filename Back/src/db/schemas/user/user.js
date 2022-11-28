import { DataTypes } from "sequelize";
import sequelize from "../../../config/db";

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
      validate: {
        isEmail: true
      }
    },
    nickname: {
      type: DataTypes.STRING(10),
      allowNull: false,
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
    indexes: [
      {unique: true, fields: ["email"]},
      {unique: true, fields: ["nickname"]}
    ],
    timestamps: true,
    tableName: "users",
    charset: "utf8",
    collate: "utf8_general_ci",
    paranoid: true
  }
);

export default User;
