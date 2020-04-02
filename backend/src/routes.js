const { Router } = require('express');
const routes = new Router();

/* Controller */
const SessionController = require('./app/controller/SessionController');
const RecipientController = require('./app/controller/RecipientController');

/* Middlewares */
const authMiddleware = require('./app/middlewares/auth');

/* Routes */
routes.post('/sessions', SessionController.store);

routes.post('/recipients', authMiddleware , RecipientController.store);

module.exports = routes;
