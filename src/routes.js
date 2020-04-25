const express = require('express');
const UserController = require('./controllers/UserControllers');
const CardController = require('./controllers/CardControllers');

const routes = express.Router();

//adicionar novo usuario
routes.post('/addUser', UserController.store);

//buscar todos usuarios
routes.get('/findUsers', UserController.index);

//adicionar nova carta
routes.post('/addCard', CardController.store);

//buscar todas as cartas
routes.get('/findCards', CardController.find);

module.exports = routes;

