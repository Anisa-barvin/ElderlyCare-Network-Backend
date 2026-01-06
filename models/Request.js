const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  elder: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  caregiver: { type: mongoose.Schema.Types.ObjectId, ref: 'Caregiver', required: true },
  message: { type: String, required: true },
  status: { type: String, default: 'pending' }, // Status can be 'pending', 'approved', or 'rejected'
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Request', requestSchema);
