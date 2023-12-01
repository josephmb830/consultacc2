const express = require ('express');

const contribuyentesRouter = require('./contribuyentesRouter');
const aniosRouter = require('./aniosRouter');
const codigoRouter = require('./codigoRouter');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/contribuyentes', contribuyentesRouter);
  router.use('/anios', aniosRouter);
  router.use('/codigo', codigoRouter);
}

module.exports = routerApi;
