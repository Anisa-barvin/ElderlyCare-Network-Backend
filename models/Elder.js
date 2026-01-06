// const mongoose = require('mongoose');

// const elderSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   age: { type: Number, required: true },
//   gender: { type: String, required: true },
//   healthConditions: { type: [String] },
//   emergencyContact: { type: String },
//   address: { type: String },
//   // Add any additional fields needed
// });

// module.exports = mongoose.model('Elder', elderSchema);



const mongoose = require('mongoose');

const elderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  age: { type: Number, required: true },
  gender: { type: String, required: true },

  phone: { type: String, required: true },
  address: { type: String, required: true },

  role: { type: String, default: "elder" },

  healthConditions: { type: [String], default: [] },
  emergencyContact: { type: String, default: "" }
}, { timestamps: true });

module.exports = mongoose.model('Elder', elderSchema);
