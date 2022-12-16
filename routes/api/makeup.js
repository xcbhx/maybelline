const express = require('express');
const router = express.Router();
const makeupCtrl = require('../../controllers/api/makeup');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//GET /api/makeup
router.get('/', makeupCtrl.getAllMakeup);
//GET /api/makeup/:id
router.get('/:id', makeupCtrl.show);

module.exports = router;