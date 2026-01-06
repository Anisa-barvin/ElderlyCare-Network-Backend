const Event = require("../models/Event");

// ➕ Add Event
exports.addEvent = async (req, res) => {
  try {
    const { title, date } = req.body;

    const event = await Event.create({
      userId: req.user.id,
      title,
      date,
    });

    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 📅 Get All Events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find({ userId: req.user.id });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
