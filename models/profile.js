"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Profile extends Model {
    static associate(models) {
      // No associations defined
    }
  }

  Profile.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true, // Optional field
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true, // Optional field
      },
    },
    {
      sequelize,
      modelName: "Profile",
      tableName: "profiles",
    }
  );

  return Profile;
};
