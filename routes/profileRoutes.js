const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile'); // Assuming you have a Profile model

// PUT: Update profile data
router.put('/', async (req, res) => {
  const { name, contact, role } = req.body;

  try {
    if (role === 'elder') {
      // Handle elder profile update
      const elderProfile = await Profile.findOneAndUpdate({ role }, { name, contact }, { new: true });
      return res.status(200).json(elderProfile);
    } else if (role === 'relation') {
      // Handle relation profile update
      const relationProfile = await Profile.findOneAndUpdate({ role }, { name, contact }, { new: true });
      return res.status(200).json(relationProfile);
    } else {
      return res.status(400).send('Invalid role');
    }
  } catch (error) {
    console.error('Error updating profile:', error);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
