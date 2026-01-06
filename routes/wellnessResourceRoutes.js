// routes/wellnessResourceRoutes.js

const express = require('express');
const router = express.Router();
const {
  createWellnessResource,
  getAllWellnessResources,
  getResourcesByCategory
} = require('../controllers/wellnessResourceController');

// POST a new wellness resource
router.post('/wellness-resource', createWellnessResource);

// GET all wellness resources
router.get('/wellness-resource', getAllWellnessResources);

// GET wellness resources by category
router.get('/wellness-resource/category/:category', getResourcesByCategory);

module.exports = router;
