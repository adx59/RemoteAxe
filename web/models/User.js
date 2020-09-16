var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require('dotenv').config();

var UserSchema = new mongoose.Schema({
    username: {type: String, lowercase: true, required: [true, "can't be blank"], index: true, unique: true},
    password: String,
    access_token: String
}, {timestamps: true});

UserSchema.methods.setPassword = function (pwd) {
    this.password = bcrypt.hashSync(pwd, bcrypt.genSaltSync(8));

    this.access_token = jwt.sign({
        id: this._id
    }, process.env.SECRET);

    return this.access_token;
}

UserSchema.methods.validPassword = function (pwd) {
    return bcrypt.compareSync(pwd, this.password);
}

module.exports = mongoose.model('User', UserSchema);
