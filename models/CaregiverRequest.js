const mongoose = require("mongoose");

const caregiverRequestSchema = new mongoose.Schema({
  elderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  caregiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Caregiver",
    required: true,
  },
  message: String,
  preferredTime: String,
  status: {
    type: String,
    default: "pending", // pending | accepted | rejected
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("CaregiverRequest", caregiverRequestSchema);
