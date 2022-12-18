const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  product_type: { type: String}
}, {
  timestamps: true
});

module.exports = mongoose.model('Category', categorySchema);
