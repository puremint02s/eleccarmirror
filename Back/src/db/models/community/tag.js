const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db");

const Tag = sequelize.define(
    "Tag",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      tableName: "tags",
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  
  module.exports = Tag;