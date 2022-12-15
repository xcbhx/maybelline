const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const makeupSchema = require('./makeupSchema');





module.exports = mongoose.model('Order', orderSchema);