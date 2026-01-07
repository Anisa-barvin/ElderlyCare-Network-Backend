const axios = require("axios");

exports.sendOtpMail = async (to, otp) => {
  try {
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Companion+",
          email: process.env.FROM_EMAIL,
        },
        to: [{ email: to }],
        subject: "Verify your email",
        htmlContent: `
          <h2>Email Verification</h2>
          <p>Your OTP is:</p>
          <h1>${otp}</h1>
          <p>This OTP will expire in 10 minutes.</p>
        `,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ OTP email sent via Brevo API");
  } catch (error) {
    console.error(
      "❌ Brevo API Mail Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};
