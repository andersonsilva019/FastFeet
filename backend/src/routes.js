const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => {
  return res.send("Hello world");
})

module.exports = routes;
