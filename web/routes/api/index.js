var express = require('express');
var apiRouter = express.Router();

apiRouter.use('/login', require('./login'));
apiRouter.use('/register', require('./register'));

module.exports = apiRouter;
