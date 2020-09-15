var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

var UserSchema = new mongoose.Schema({
    username: {type: String, lowercase: true, required: [true, "can't be blank"], index: true},
    hash: String,
    salt: String
});

mongoose.model('User', UserSchema);