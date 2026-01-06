// routes/resourceRoutes.js

const express = require('express');
const router = express.Router();
const {
  createResource,
  getAllResources,
  getResourceById,
} = require('../controllers/resourceController');

router.post('/create', createResource);           // Add new resource
router.get('/', getAllResources);                 // List all resources
router.get('/:id', getResourceById);              // Get single resource

module.exports = router;
