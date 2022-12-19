const mongoose = require('mongoose');
const makeupSchema = require('./makeupSchema');




module.exports = mongoose.model('Makeup', makeupSchema);