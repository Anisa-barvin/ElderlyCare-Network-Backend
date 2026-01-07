const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,       // smtp-relay.brevo.com
  port: process.env.SMTP_PORT,       // 587
  secure: false,                     // MUST be false for Render
  auth: {
    user: process.env.SMTP_USER,     // Brevo email
    pass: process.env.SMTP_PASS,     // Brevo SMTP key
  },
  connectionTimeout: 10000,          // ✅ prevents timeout crash
  greetingTimeout: 10000,
  socketTimeout: 10000,
  tls: {
    rejectUnauthorized: false        // ✅ REQUIRED on Render
  }
});

exports.sendOtpMail = async (to, otp) => {
  try {
    await transporter.sendMail({
      from: `"Companion+" <${process.env.SMTP_USER}>`,
      to,
      subject: "Verify your email",
      text: `Your OTP is ${otp}. It expires in 10 minutes.`,
    });
    console.log("✅ OTP email sent");
  } catch (error) {
    console.error("❌ MAIL ERROR:", error.message);
    throw error;
  }
};
