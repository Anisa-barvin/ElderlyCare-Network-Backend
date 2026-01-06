// models/WellnessResource.js

const mongoose = require('mongoose');

const wellnessResourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, enum: ['Exercise', 'Nutrition', 'Mental Health', 'Meditation'], required: true },
  link: { type: String }, // External link to the resource (e.g., video, article, etc.)
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Elder' }, // Who created the resource
}, { timestamps: true });

module.exports = mongoose.model('WellnessResource', wellnessResourceSchema);
