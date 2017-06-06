var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    session: { type: String, required: true },
    expires: { type: Date, required: true }
});

module.exports = mongoose.model('Session', userSchema);