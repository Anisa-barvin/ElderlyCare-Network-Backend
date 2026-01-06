const mongoose = require('mongoose');

const helpQuerySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, refPath: 'userModel' },
  userModel: { type: String, enum: ['Elder', 'Relation'], required: true },
  message: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('HelpQuery', helpQuerySchema);
