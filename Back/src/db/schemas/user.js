const { DataTypes, Model } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    return super.init(
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
        },
        nickname: {
          type: DataTypes.STRING,
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
        },
        elec_car_owned: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        test_type: {
          type: DataTypes.INTEGER,
        },
        car_id: {
          type: DataTypes.INTEGER,
        },
        average_mileage: {
          type: DataTypes.FLOAT,
        },
      },
      {
        sequelize,
        timestamps: true,
        modelName: "User",
        tableName: "users",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
}

module.exports = User;