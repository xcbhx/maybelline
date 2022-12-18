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
    api_featured_image: {
        type: String
    },
    description: {
        type: String
    },
    rating: {
        type: Number
    },
    product_type: {
        type: String, 
        ref: 'Category'
    },
    product_colors: {
        type: [String]
    }
});


module.exports = makeupSchema;