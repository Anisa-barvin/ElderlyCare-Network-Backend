// models/EmergencyAlert.js

const mongoose = require('mongoose');

const emergencyAlertSchema = new mongoose.Schema({
  elderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Elder', required: true },
  location: { type: String }, // Optional: GPS location or address
  message: { type: String, default: 'Emergency alert triggered!' },
  isResolved: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('EmergencyAlert', emergencyAlertSchema);
