const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    apiId: {
        type: Number,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    product_type: {
        type: String
    },
    sortOrder: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Category', categorySchema);