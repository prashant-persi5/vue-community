const Joi = require('joi');
const db = require('../db');
const { insertAndValidate } = require('./index');

const schema = Joi.object().keys({
  title: Joi.string().required(),
  description: Joi.string(),
  image_url: Joi.string()
});

module.exports = {
  getAll() {
    return db('category').select();
  },
  insert(category) {
    return insertAndValidate('category', category, schema);
  }
};
