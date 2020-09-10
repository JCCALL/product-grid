'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('/../config/config.json');
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
}else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}


db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;