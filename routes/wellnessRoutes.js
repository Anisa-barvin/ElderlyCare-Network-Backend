const express = require('express');
const router = express.Router();

const {
  getAllResources,
  getResourceDetails,
} = require('../controllers/wellnessController');

router.get('/', getAllResources);
router.get('/:id', getResourceDetails);

module.exports = router;
