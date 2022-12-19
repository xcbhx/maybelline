require('dotenv').config();
require('./config/database');

const Makeup = require('./models/makeup');

async function getMakeups() {
    await Makeup.deleteMany({});
    const makeupData = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`).then(res => res.json());
    try {
        for (let makeup of makeupData) {
            const product_colors = makeup.product_colors.filter(c => typeof(c.colour_name) === 'string');
            const colors = product_colors.map(c => c.colour_name.trim());
            console.log(colors);
            const m = await Makeup.create({
                APIid: makeup.id,
                name: makeup.name,
                price: makeup.price,
                api_featured_image: makeup.api_featured_image,
                description: makeup.description,
                rating: makeup.rating,
                product_type: makeup.product_type,
                product_colors: colors
            })
            console.log(m);
        }
    } catch (err) {
        console.log(err);
    }
    console.log('SEEDED');
}

getMakeups().then(function () {
    process.exit();
});