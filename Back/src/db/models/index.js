const sequelize = require("../config/db");
const User = require("./user");
const Car = require("./car");
const TestType = require("./testType");

const db = {};

db.sequelize = sequelize;
db.User = User;
db.Car = Car;
db.TestType = TestType;

module.exports = db;
