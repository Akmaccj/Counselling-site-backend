// config/database.js
const { Sequelize } = require("sequelize");
const config = require("./config.js");

// Get environment, default to 'development'
const env = process.env.NODE_ENV || "development";

// Get the configuration for the current environment
const dbConfig = config[env];

// Create and export Sequelize instance
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: false, // Set to true to enable SQL query logging
  }
);

module.exports = sequelize;
