var express = require('express');
var mongoose = require('mongoose');
const { response } = require('../../app');
var logger = require('morgan');

var router = express.Router();

router.use(express.json());

/* POST login. */
router.post('/', function(req, res, next) {
  console.log(req.body)
  res.send(req.body);
});

module.exports = router;
