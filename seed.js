require('dotenv').config();
require('./config/database');

const fetch = require('node-fetch');
const Makeup = require('./models/makeup');

async function getMakeups(req, res, next) {
    const data = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`);
    const makeupData = await data.json();
    for (makeup of makeupData) {
        const exists = await makeup.exists({Id:makeup.id})
        if (!exists) {
            await Makeup.create({
                Id: makeup.id,
                name: makeup.name,
                price: makeup.price,
                image_link: makeup.image_link,
                description: makeup.description,
                rating: makeup.rating,
                product_type: makeup.product_type
            })
        }
    }
}

getMakeups();