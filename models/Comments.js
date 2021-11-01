const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

class Comments extends Model {}

module.exports = Comments;
