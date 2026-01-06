const express = require('express');
const router = express.Router();
const relationController = require('../controllers/relationController');

router.post('/link', relationController.linkRelation);

module.exports = router;
