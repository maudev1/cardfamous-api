const Sequelize = require('sequelize');
const dbConfig = require('../config/OLD')

const connection = new Sequelize(dbConfig);

module.exports = connection;