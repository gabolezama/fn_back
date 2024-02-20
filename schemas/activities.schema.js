const Joi = require('joi');

const id = Joi.string();
const name = Joi.string().min(3).max(25);
const description = Joi.string().min(3).max(50);
const date = Joi.string().min(3).max(25);
const isArea = Joi.boolean();
const isRecursive = Joi.boolean();
const single_marker = Joi.object();
const marker = Joi.array();

const createActivitySchema = Joi.object({
    task_id: id.required(),
    name: name.required(),
    description: description.required(),
    is_area: isArea.required(),
    is_recursive: isRecursive.required(),
    date: date.required(),
    single_marker: single_marker,
    markers: marker
});

const updateActivitySchema = Joi.object({
    task_id: id.required(),
    name: name.required(),
    description: description.required(),
    is_area: isArea.required(),
    is_recursive: isRecursive.required(),
    date: date.required(),
    single_marker: single_marker,
    markers: marker
});

const getActivitySchema = Joi.object({
  id: id.required(),
});

module.exports = { createActivitySchema, updateActivitySchema, getActivitySchema }