const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;


const makeupSchema = new Schema({
    id: {
        type: Number,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    image_link: {
        type: String
    },
    description: {
        type: String
    },
    rating: {
        type: Number
    },
    product_type: {
        type: String
    }
});

module.exports = mongoose.model('Makeup', makeupSchema);