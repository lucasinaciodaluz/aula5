const express = require('express');
const UserController = require('./app/controllers/UserController');
const SalesOrderController = require('./app/controllers/SalesOrderController');

const routes = express.Router();

routes.get('/users', UserController.list);
routes.get('/users/:id', UserController.get);
routes.post('/users', UserController.create);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.destroy);

routes.get('/salesOrder', SalesOrderController.list);

module.exports = routes;
