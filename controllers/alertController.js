const Alert = require('../models/Alert');

// Send an emergency alert
const sendEmergencyAlert = async (req, res) => {
  const { senderId, receiverId, message } = req.body;
  try {
    const newAlert = new Alert({
      sender: senderId,
      receiver: receiverId,
      message,
      timestamp: new Date(),
      status: 'pending', // Status can be 'pending', 'acknowledged', etc.
    });

    await newAlert.save();
    res.status(200).json({ message: 'Emergency alert sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending emergency alert' });
  }
};

module.exports = {
  sendEmergencyAlert,
};
