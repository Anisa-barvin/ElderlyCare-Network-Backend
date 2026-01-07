const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false, // TLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
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
