const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // List of participants (elders, relations, caregivers)
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }], // List of messages in the chat
});

module.exports = mongoose.model('Chat', chatSchema);
