const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;


const makeupSchema = new Schema({
    APIid: {
        type: Number,
    },
    name: {
        type: String,
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
    },
    product_colors: {
        type: [String]
    }
});


module.exports = mongoose.model('Makeup', makeupSchema);