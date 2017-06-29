var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: { type: String, required: true },
    type: { type: String, enum: ['categorized', 'custom', 'main','sub-main'] },
    subCategories: [],
    condition: { type: String, required: false }
});

module.exports = mongoose.model('Category', schema)