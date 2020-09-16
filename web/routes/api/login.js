var express = require('express');
var mongoose = require('mongoose');
const { response } = require('../../app');

var User = mongoose.models.User;

var router = express.Router();

router.use(express.json());

/* POST login. */
router.post('/', async function(req, res, next) {
    found = await User.find({ username: req.body.username });
    console.log(found);
    if (found.length == 0) {
        return res.status(404).send('user not found');
    }

    if (found[0].validPassword(req.body.password)) {
        return res.json({ auth: found[0].access_token });
    } else {
        return res.status(401).send('incorrect pwd');
    }
});

module.exports = router;
