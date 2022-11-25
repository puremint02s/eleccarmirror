const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const TestType = sequelize.define(
    "TestType",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
    tableName: "test_types",
    charset: "utf8",
    collate: "utf8_general_ci",
    }
  );
  
  module.exports = TestType;