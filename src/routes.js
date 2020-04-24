const express = require('express');
const UserController = require('./controllers/UserControllers');
const CardController = require('./controllers/CardControllers')

const routes = express.Router();

//adicionar novo usuario
routes.post('/users', UserController.store);

//buscar todos usuarios
routes.get('/find', UserController.find);

//adicionar nova carta
routes.post('/addCard', CardController.store);

module.exports = routes;
