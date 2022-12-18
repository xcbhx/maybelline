const mongoose = require('mongoose');
require('./category');
const makeupSchema = require('./makeupSchema');




module.exports = mongoose.model('Makeup', makeupSchema);