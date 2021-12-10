'use strict';

const { Sequelize } = require('sequelize');

const fs = require('fs');
// === dev ===
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// === produção ===
let config = {
  "username": process.env.USER,
  "password": process.env.PASSWORD,
  "database": process.env.DATABASE,
  "host": process.env.HOST,
  "dialect": "mysql"
}

let sequelize = new Sequelize(config.database, config.username, config.password, config);

module.exports = sequelize;