const express = require('express');
const validatorHandler = require('./../middlewares/validator.handler');
const { createActivitySchema, getActivitySchema, updateActivitySchema } = require('../schemas/activities.schema');
const ActivitiesService = require('../services/activities.service');

const router = express.Router();
const service = new ActivitiesService();

router.get('/', async (req, res, next) => {
  try {
    const products = await service.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getActivitySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/create',
  validatorHandler(createActivitySchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProduct = await service.create(body);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  }
);

router.put('/update',
  validatorHandler(updateActivitySchema, 'body'),
  async (req, res, next) => {
    try {
      const { task_id: id } = req.body;
      console.log('UPDATE--->', id);
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/delete/:id',
  validatorHandler(getActivitySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
