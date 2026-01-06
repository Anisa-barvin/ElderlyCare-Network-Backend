// routes/doctorRoutes.js

const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

// Route: GET /api/doctor/all
router.get('/all', doctorController.getAllDoctors);

module.exports = router;
