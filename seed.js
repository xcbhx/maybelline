require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Makeup = require('./models/makeup');

(async function() {
    const categories = await Category.create([
        {product_type: 'Foundation'},
        {product_type: 'Eyeshadow'},
        {product_type: 'Eyeliner'},
        {product_type: 'Nail_polish'},
        {product_type: 'Lipstick'},
        {product_type: 'Mascara'},
        {product_type: 'Bronzer'},
        {product_type: 'Blush'},
        {product_type: 'Lip_Liner'},
    ]);
    
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
                product_type: makeup.product_type, category: categories,
                product_colors: colors
            })
            console.log(m);
        }
    } catch (err) {
        console.log(err);
    }
    
    console.log('SEEDED');
    process.exit();
})();
