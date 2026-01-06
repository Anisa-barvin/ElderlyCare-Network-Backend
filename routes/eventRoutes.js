const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { addEvent, getEvents } = require("../controllers/eventController");

router.post("/", auth, addEvent);
router.get("/", auth, getEvents);

module.exports = router;
