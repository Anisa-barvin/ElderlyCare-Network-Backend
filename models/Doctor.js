// models/Doctor.js

const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  experience: { type: Number, required: true }, // in years
  contact: { type: String, required: true },
  availableSlots: [{ type: String }] // e.g., ["10:00 AM", "2:00 PM"]
}, { timestamps: true });

module.exports = mongoose.model('Doctor', doctorSchema);
