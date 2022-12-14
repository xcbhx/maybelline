require('dotenv').config();
require('./config/database');

const fetch = require('node-fetch');
// const Category = require('./models/category');
const Item = require('./models/item');

async function getItems(req, res, next) {
    const data = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`);
    const itemData = await data.json();
    for (item of itemData) {
        const exists = await Item.exists({apiId:item.id})
        if (!exists) {
            await Item.create({
                apiId: item.id,
                name: item.name,
                price: item.price,
                image_link: item.image_link,
                description: item.description,
                rating: item.rating,
                product_type: item.product_type
            })
        }
    }
    console.log('items');
}

getItems();