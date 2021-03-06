const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const {checkAuthHeaderSetUser, checkUnAuth, notFound, errorHandler} = require('./middlewares');
require('dotenv').config();
const auth = require('./auth');
const api = require('./api');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());

app.use(checkAuthHeaderSetUser);

//Routes go here...
app.get('/', (req, res) => {
  res.json({
    message: "Welcome to Community API"
  });
});

app.use('/auth', auth);
app.use('/api/v1/', api);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
