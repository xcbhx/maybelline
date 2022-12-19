const Makeup = require('../../models/makeup');

module.exports = {
    index,
    show
};

async function index(req, res) {
    const makeups= await Makeup.find({});
    res.json(makeups);
    console.log(makeups);
}

async function show(req, res) {
    const makeup = await Makeup.findById(req.params.id);
    res.json(makeup);
}

