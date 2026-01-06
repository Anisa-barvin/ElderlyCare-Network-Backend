// controllers/emergencyController.js

const EmergencyAlert = require('../models/EmergencyAlert');

// Trigger an emergency alert
exports.triggerAlert = async (req, res) => {
  try {
    const newAlert = new EmergencyAlert(req.body);
    await newAlert.save();
    res.status(201).json({ message: 'Emergency alert sent!', alert: newAlert });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all emergency alerts (for caregivers or admins)
exports.getAllAlerts = async (req, res) => {
  try {
    const alerts = await EmergencyAlert.find().populate('elderId').sort({ createdAt: -1 });
    res.json(alerts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mark an alert as resolved
exports.resolveAlert = async (req, res) => {
  try {
    const alert = await EmergencyAlert.findByIdAndUpdate(req.params.id, { isResolved: true }, { new: true });
    res.json({ message: 'Alert marked as resolved.', alert });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
