/*
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, role, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.status(200).json({ user: { id: user._id, name: user.name, role: user.role }, token });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
*/
// controllers/authController.js







const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { generateOtp } = require("../utils/generateOtp");
const { sendOtpMail } = require("../utils/mailer");

// exports.register = async (req, res) => {
//   try {
//     const { name, email, password, role, age, gender, phone, address } = req.body;

//     const existingUser = await User.findOne({ email });
//     if (existingUser)
//       return res.status(400).json({ message: "User already exists" });

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const otp = generateOtp();

//     const user = new User({
//       name,
//       email,
//       password: hashedPassword,
//       role,
//       age,
//       gender,
//       phone,
//       address,
//       emailOtp: otp,
//       otpExpiry: Date.now() + 10 * 60 * 1000,
//       isEmailVerified: false,
//     });

//     await user.save();
//     await sendOtpMail(email, otp);

//     res.status(201).json({
//       message: "Registered successfully. OTP sent to email.",
//     });

//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
exports.register = async (req, res) => {
  try {
    const { name, email, password, role, age, gender, phone, address } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = generateOtp();

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
      age,
      gender,
      phone,
      address,
      emailOtp: otp,
      otpExpiry: Date.now() + 10 * 60 * 1000,
      isEmailVerified: false,
    });

    await user.save();
    console.log("✅ User saved");

    // 🟡 Email sending SHOULD NOT crash API
    try {
      await sendOtpMail(email, otp);
      console.log("✅ OTP email sent");
    } catch (emailError) {
      console.error("❌ Email failed:", emailError.message);
    }

    return res.status(201).json({
      message: "Registered successfully. OTP sent to email.",
    });

  } catch (err) {
    console.error("❌ Register error:", err);
    res.status(500).json({ message: err.message });
  }
};



exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "User not found" });

    if (!user.isEmailVerified) {
      return res.status(403).json({
        message: "Please verify your email before login",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      user: { id: user._id, name: user.name, role: user.role },
      token,
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};





exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "User not found" });

    // ✅ FIXED FIELD NAMES
    if (
      user.emailOtp !== otp ||
      user.otpExpiry < Date.now()
    ) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    user.isEmailVerified = true;
    user.emailOtp = undefined;
    user.otpExpiry = undefined;
    await user.save();

    // ✅ RETURN TOKEN AFTER OTP VERIFY
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Email verified successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
      },
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


/* ================= CHANGE PASSWORD ================= */
exports.changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    const user = await User.findById(req.user.id);
    if (!user)
      return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Old password incorrect" });

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.json({ message: "Password updated successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};