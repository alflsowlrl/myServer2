var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userInfoSchema = new Schema({
    user_id: String,
    phoneBook: [{
        name: String,
        number: String
    }],
    gallery: [{path: String}]

});

module.exports = mongoose.model('userInfo', userInfoSchema);