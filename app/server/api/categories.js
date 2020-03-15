const express = require('express');
const router = express.Router();
const categories = require('../queries/categories');
const { checkUnAuth, isAdmin } = require('../middlewares');

router.get('/', async (req, res, next) => {
  try {
    const all = await categories.getAll();
    res.json(all);
  } catch(error) {
    next(error);
  }
});

router.post('/', checkUnAuth, isAdmin, async (req, res, next) => {
  try {
    const category = await categories.insert(req.body);
    res.json(category);
  } catch(error) {
    next(error);
  }
});

module.exports = router;
