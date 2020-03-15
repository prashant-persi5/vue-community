const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../passport/google');
const { create } = require('./utils');

router.get('/isAdmin', async (req, res) => {
  if (req.user) {
    if (req.user.role_id === 3) {
      return res.json({isAdmin: true});    
    }
  }
  res.json({isAdmin: false});
});

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback', (req, res, next) => {
  passport.authenticate('google', async (err, user) => {
    if(err) { return next(err); }
    try {
      //Create a JWT with user
      const token = await create(user);
      res.redirect(`${process.env.CLIENT_REDIRECT}${token}`);
    } catch(error) {
      res.redirect(`${process.env.CLIENT_REDIRECT}${error.message}`);
    }    
  })(req, res, next);
});

module.exports = router;
