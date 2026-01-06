const User = require("../models/User");
const Caregiver = require("../models/Caregiver");
const { generateOtp } = require("../utils/generateOtp");
const { sendOtpMail } = require("../utils/mailer");

exports.sendOtp = async (req, res) => {
  const { email, role } = req.body;

  const Model = role === "caregiver" ? Caregiver : User;

  const user = await Model.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const otp = generateOtp();

  user.emailOtp = otp;
  user.otpExpiry = Date.now() + 10 * 60 * 1000;
  await user.save();

  await sendOtpMail(email, otp);

  res.json({ message: "OTP sent to email" });
};


exports.verifyOtp = async (req, res) => {
  const { email, otp, role } = req.body;

  const Model = role === "caregiver" ? Caregiver : User;
  const user = await Model.findOne({ email });

  if (!user) return res.status(404).json({ message: "User not found" });

  if (
    user.emailOtp !== otp ||
    Date.now() > user.otpExpiry
  ) {
    return res.status(400).json({ message: "Invalid or expired OTP" });
  }

  user.isEmailVerified = true;
  user.emailOtp = null;
  user.otpExpiry = null;
  await user.save();

  res.json({ message: "Email verified successfully" });
};
