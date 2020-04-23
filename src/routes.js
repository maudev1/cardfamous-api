const express = require('express');
const UserController = require('./controllers/UserControllers');

const routes = express.Router();

//adicionar novo usuario
routes.post('/users', UserController.store);

//buscar todos usuarios
routes.get('/find', UserController.find);

module.exports = routes;
