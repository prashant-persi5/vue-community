const Joi = require('joi');
const db = require('../db');

async function insertAndValidate(table_name, item, schema) {
  const result = Joi.validate(item, schema);
  if(result.error === null) {
    const rows = await db(table_name).insert(item, '*');
    return rows[0];
  } else {
    return Promise.reject(result.error);
  }
}

module.exports = {
  insertAndValidate
}
