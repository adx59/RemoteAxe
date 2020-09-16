var express = require('express');
var mongoose = require('mongoose');
const { response, search } = require('../../app');

var User = mongoose.model('User');

var router = express.Router();

router.use(express.json());

/* POST registration */
router.post('/', async function (req, res, next) {
    var found = await User.find( {username: req.body.username} )
    if (found.length > 0) {
        return res.status(409).send('username taken')
    }

    var user = new User({username: req.body.username});
    var token = user.setPassword(req.body.password);

    user.save().then(() => {
        return res.json({ auth: token });
    });
});

module.exports = router;
