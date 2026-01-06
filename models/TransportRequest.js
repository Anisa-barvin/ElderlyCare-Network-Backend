// models/TransportRequest.js

const mongoose = require('mongoose');

const transportRequestSchema = new mongoose.Schema({
  elderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Elder', required: true },
  pickupLocation: { type: String, required: true },
  destination: { type: String, required: true },
  requestTime: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'accepted', 'completed', 'cancelled'], default: 'pending' },
  notes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('TransportRequest', transportRequestSchema);
