const express = require('express');

const activitiesRouter = require('./activities.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/activities', activitiesRouter);
}

module.exports = routerApi;