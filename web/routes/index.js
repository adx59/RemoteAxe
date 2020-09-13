var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('login', { title: 'RemoteAxe Login' });
});

router.use('/api', require('./api'));

module.exports = router;
