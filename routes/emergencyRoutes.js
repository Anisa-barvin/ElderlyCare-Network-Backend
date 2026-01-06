const express = require('express');
const router = express.Router();

const {
  sendEmergencyAlert,
  getEmergencyAlerts,
} = require('../controllers/emergencyController');

router.post('/send', sendEmergencyAlert);
router.get('/:elderId', getEmergencyAlerts);

module.exports = router;
