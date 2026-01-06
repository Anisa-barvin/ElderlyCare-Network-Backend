const mongoose = require('mongoose');

const relationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  relationType: { type: String, required: true },
  contact: { type: String, required: true },
  elderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Elder', required: true },
  // Add any additional fields needed
});

module.exports = mongoose.model('Relation', relationSchema);
