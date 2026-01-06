const express = require('express');
const router = express.Router();
const {
  getChats,
  getChatDetails,
  sendMessage,
} = require('../controllers/chatController');

// GET request to fetch all chats for the user
router.get('/', getChats);

// GET request to get details of a specific chat
router.get('/:id', getChatDetails);

// POST request to send a new message
router.post('/', sendMessage);

module.exports = router;
