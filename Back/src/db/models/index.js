const { Sequelize } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./user/user");
const Car = require("./user/car");
const TestType = require("./user/testType");
const Post = require("./community/post");
const Comment = require("./community/comment");
const Tag = require("./community/tag")

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = User;
db.Car = Car;
db.TestType = TestType;
db.Post = Post;
db.Comment = Comment;
db.Tag = Tag;

//user information
db.Car.hasMany(db.User, {
    foreignKey: "car_id",
    sourceKey: "id"
});
db.TestType.hasMany(db.User, {
    foreignKey: "test_type",
    sourceKey: "id"
});

//community
db.User.hasMany(db.Post, {
    foreignKey: "user_id",
    sourceKey: "id",
})
db.User.hasMany(db.Comment, {
    foreignKey: "user_id",
    sourceKey: "id"
})
db.Post.hasMany(db.Comment, {
    foreignKey: "post_id",
    sourceKey: "id"
})
db.Tag.belongsToMany(db.Post, {through: "write_tags"});
db.Post.belongsToMany(db.Tag, {through: "write_tags"})

module.exports = db;

