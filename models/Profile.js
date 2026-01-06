const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  role: { type: String, required: true }, // 'elder' or 'relation'
});

module.exports = mongoose.model('Profile', profileSchema);
