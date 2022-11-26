const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db");

const Post = sequelize.define(
    "Post",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      images: {
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: true,
      tableName: "posts",
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  
  module.exports = Post;