var express = require('express');
var apiRouter = express.Router();

apiRouter.use('/login', require('./login'));

module.exports = apiRouter;
