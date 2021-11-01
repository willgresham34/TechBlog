const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/config");

class User extends Model {
  checkPassword(passwordInput) {
    return bcrypt.compareSync(passwordInput, this.password);
  }
}

module.exports = User;
