const express = require('express');
const UserController = require('./controllers/UserControllers');

const routes = express.Router();

//routes.get('/', (req, res) =>{
//    return res.json({hello:'World'});
// 
//})
//routes.post('/users', UserController.store)

routes.post('/users', UserController.store)


module.exports = routes;
