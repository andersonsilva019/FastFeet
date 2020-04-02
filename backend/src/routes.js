const { Router } = require('express');
const routes = new Router();

const SessionController = require('./app/controller/SessionController');

routes.post('/sessions', SessionController.store);

module.exports = routes;
