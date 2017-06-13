var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, enum: ['categorized', 'custom', 'main','sub-main'] },
    parentCategoryId: { type: Schema.Types.ObjectId },
    condition: { type: String, required: false }
});

module.exports = mongoose.model('Category', schema)