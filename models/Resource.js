// models/Resource.js

const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ['article', 'video', 'podcast'], required: true },
  description: String,
  link: { type: String, required: true },
  category: String,
}, { timestamps: true });

module.exports = mongoose.model('Resource', resourceSchema);
