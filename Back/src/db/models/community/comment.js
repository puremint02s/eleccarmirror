const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db");

const Comment = sequelize.define(
    "Comment",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      contents: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
    },
    {
      timestamps: true,
      tableName: "comments",
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  
  module.exports = Comment;