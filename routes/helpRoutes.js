const express = require('express');
const router = express.Router();

// Dummy route for fetching health data
router.get('/', async (req, res) => {
  try {
    const healthData = { status: 'Good', lastCheck: '2025-04-20' };
    return res.status(200).json(healthData);
  } catch (error) {
    return res.status(500).send('Server error');
  }
});

module.exports = router;
