const mongoose = require('mongoose');
const makeupSchema = require('./makeupSchema');
require('./category');




module.exports = mongoose.model('Makeup', makeupSchema);