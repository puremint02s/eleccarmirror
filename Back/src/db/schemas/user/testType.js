import { DataTypes } from "sequelize";
import sequelize from "../../../config/db";

const TestType = sequelize.define(
    "TestType",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      }
    },
    {
    tableName: "test_types",
    charset: "utf8",
    collate: "utf8_general_ci",
    }
  );
  
  export default TestType;