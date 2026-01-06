const express = require('express');
const router = express.Router();
const { sendEmergencyAlert } = require('../controllers/alertController');

// POST request to send an emergency alert
router.post('/', sendEmergencyAlert);

module.exports = router;
