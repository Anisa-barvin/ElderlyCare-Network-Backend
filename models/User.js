// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   role: { type: String, enum: ['elder', 'relation'], required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// }, { timestamps: true });

// module.exports = mongoose.model('User', userSchema);



// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, enum: ["elder", "relation", "caregiver"], default: "elder" },

//   // ✅ Add these fields so profile works
//   age: { type: Number },
//   gender: { type: String },
//   phone: { type: String },
//   address: { type: String }
// });

// module.exports = mongoose.model("User", userSchema);





const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },

  email: { type: String, required: true, unique: true },

  password: { type: String, required: true },

  role: {
    type: String,
    enum: ["elder", "relation", "caregiver"],
    default: "elder",
  },

  // 👤 Profile fields
  age: { type: Number },
  gender: { type: String },
  phone: { type: String },
  address: { type: String },

  // 🔐 EMAIL VERIFICATION FIELDS (ADD THESE)
  isEmailVerified: {
    type: Boolean,
    default: false,
  },

  emailOtp: {
    type: String,
  },

  otpExpiry: {
    type: Date,
  },
});

module.exports = mongoose.model("User", userSchema);









