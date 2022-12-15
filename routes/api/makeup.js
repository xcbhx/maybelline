const express = require('express');
const router = express.Router();
const makeupCtrl = require('../../controllers/api/makeup');

router.get('/', makeupCtrl.index);

module.exports = router;