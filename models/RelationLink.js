// models/RelationLink.js

const mongoose = require('mongoose');

const relationLinkSchema = new mongoose.Schema({
  elderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Elder', required: true },
  relationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Relation', required: true },
  relationType: { type: String, required: true }, // e.g., Daughter, Son, Niece
}, { timestamps: true });

module.exports = mongoose.model('RelationLink', relationLinkSchema);
