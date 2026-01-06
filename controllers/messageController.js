// const Message = require("../models/Message");

// // Save message
// exports.sendMessage = async (req, res) => {
//   const { receiverId, text } = req.body;

//   const message = await Message.create({
//     senderId: req.user.id,
//     receiverId,
//     text,
//   });

//   res.status(201).json(message);
// };

// // Get chat history
// exports.getMessages = async (req, res) => {
//   const { userId } = req.params;

//   const messages = await Message.find({
//     $or: [
//       { senderId: req.user.id, receiverId: userId },
//       { senderId: userId, receiverId: req.user.id },
//     ],
//   }).sort({ createdAt: -1 });

//   res.json(messages);
// };

const Message = require("../models/Message");

/* ================= SEND MESSAGE ================= */
exports.sendMessage = async (req, res) => {
  try {
    const { receiverId, text } = req.body;

    const message = await Message.create({
      senderId: req.user.id,
      receiverId,
      text,
    });

    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= GET CHAT ================= */
exports.getChat = async (req, res) => {
  try {
    const otherUserId = req.params.userId;
    const myId = req.user.id;

    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: otherUserId },
        { senderId: otherUserId, receiverId: myId },
      ],
    }).sort({ createdAt: 1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
