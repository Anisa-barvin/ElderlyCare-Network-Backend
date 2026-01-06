const express = require('express');
const router = express.Router();

const {
  requestTransport,
  getBookingHistory,
} = require('../controllers/transportController');

router.post('/request', requestTransport);
router.get('/history/:elderId', getBookingHistory);

module.exports = router;
