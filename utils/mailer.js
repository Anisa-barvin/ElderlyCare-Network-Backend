const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

exports.sendOtpMail = async (to, otp) => {
  try {
    await transporter.sendMail({
      from: `"Companion+" <${process.env.EMAIL}>`,
      to,
      subject: "Verify your email",
      text: `Your OTP is ${otp}. It expires in 10 minutes.`,
    });

    console.log("✅ OTP MAIL SENT TO:", to);

  } catch (err) {
    console.error("❌ MAIL ERROR:", err);
    throw err;
  }
};
