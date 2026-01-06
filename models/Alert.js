const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  status: { type: String, default: 'pending' }, // 'pending', 'acknowledged', etc.
});

module.exports = mongoose.model('Alert', alertSchema);
