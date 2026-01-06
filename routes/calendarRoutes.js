const express = require('express');
const router = express.Router();

const {
  getEvents,
  addEvent,
} = require('../controllers/calendarController');

router.get('/:userId', getEvents);
router.post('/add', addEvent);

module.exports = router;
