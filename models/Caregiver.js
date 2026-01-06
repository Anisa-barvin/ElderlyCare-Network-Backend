// const mongoose = require('mongoose');

// const caregiverSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   expertise: { type: String, required: true }, // Expertise (e.g., "Nursing", "Physical Therapy")
//   location: { type: String, required: true }, // Location (e.g., "New York")
//   available: { type: Boolean, required: true }, // Availability (true/false)
//   phone: { type: String, required: true },
//   email: { type: String, required: true },
//   profilePicture: { type: String }, // URL to caregiver's profile picture (optional)
// });

// module.exports = mongoose.model('Caregiver', caregiverSchema);




// const mongoose = require("mongoose");

// const caregiverSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
//   skills: [String],
//   experience: Number,
//   gender: String,
//   location: String,
//   availability: String,
//   rating: { type: Number, default: 4 },
// });

// module.exports = mongoose.model("Caregiver", caregiverSchema);






// const mongoose = require("mongoose");

// const caregiverSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
//   specialty: String,
//   location: String,
//   address: String,   // ✅ Add this

//   experience: String,
//   phone: String,
//   gender: String,
// });

// module.exports = mongoose.model("Caregiver", caregiverSchema);





const mongoose = require("mongoose");

const caregiverSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true, // 🔐 avoid duplicate emails
  },
  password: String,

  specialty: String,
  location: String,
  address: String,

  experience: String,
  phone: String,
  gender: String,

  /* ===== EMAIL VERIFICATION FIELDS ===== */
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

module.exports = mongoose.model("Caregiver", caregiverSchema);
