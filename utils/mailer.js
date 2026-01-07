const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // MUST be false for port 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

exports.sendOtpMail = async (to, otp) => {
  try {
    await transporter.sendMail({
      from: `"Companion+" <${process.env.FROM_EMAIL}>`,
      to,
      subject: "Verify your email",
      text: `Your OTP is ${otp}. It expires in 10 minutes.`,
    });

    console.log("✅ OTP Email sent successfully");
  } catch (error) {
    console.error("❌ MAIL ERROR:", error.message);
    throw error;
  }
};
