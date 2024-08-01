// models/user.js
"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Users extends Model {
    static associate(models) {
      // define associations here
    }
  }

  Users.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      message: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Users",
      tableName: "users",
    }
  );

  return Users;
};
