const Sequelize = require('sequelize');

const dbConfig = require('../config/database');

const User = require('../models/User');

const Card = require('../models/Card');

const connection = new Sequelize(dbConfig);

User.init(connection);
Card.init(connection);

module.exports = connection;

