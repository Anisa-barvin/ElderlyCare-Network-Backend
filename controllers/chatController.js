const Chat = require('../models/Chat');
const Message = require('../models/Message');

// Get all chats for the user
const getChats = async (req, res) => {
  const userId = req.user.id; // Assuming the user is authenticated and we have access to their ID
  try {
    const chats = await Chat.find({ participants: userId }).populate('participants messages');
    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching chats' });
  }
};

// Get details of a specific chat
const getChatDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const chat = await Chat.findById(id).populate('participants messages');
    if (!chat) {
      return res.status(404).json({ message: 'Chat not found' });
    }
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching chat details' });
  }
};

// Send a new message in the chat
const sendMessage = async (req, res) => {
  const { chatId, senderId, text } = req.body;
  try {
    const chat = await Chat.findById(chatId);
    if (!chat) {
      return res.status(404).json({ message: 'Chat not found' });
    }

    const newMessage = new Message({
      chat: chatId,
      sender: senderId,
      text,
      timestamp: new Date(),
    });

    await newMessage.save();
    chat.messages.push(newMessage);
    await chat.save();

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending message' });
  }
};

module.exports = {
  getChats,
  getChatDetails,
  sendMessage,
};
