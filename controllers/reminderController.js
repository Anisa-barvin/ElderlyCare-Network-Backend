const Reminder = require("../models/Reminder");

/* ================= ADD ================= */
const createReminder = async (req, res) => {
  try {
    const reminder = new Reminder({
      elderId: req.user.id,
      ...req.body,
    });

    await reminder.save();
    res.status(201).json(reminder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ================= GET ALL ================= */
const getReminders = async (req, res) => {
  try {
    const reminders = await Reminder.find({
      elderId: req.user.id,
    }).sort({ datetime: 1 });

    res.json(reminders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ================= UPDATE ================= */
const updateReminder = async (req, res) => {
  try {
    const reminder = await Reminder.findOneAndUpdate(
      { _id: req.params.id, elderId: req.user.id },
      req.body,
      { new: true }
    );

    res.json(reminder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ================= DELETE ================= */


/* ================= DELETE ================= */
const deleteReminder = async (req, res) => {
  try {
    const reminder = await Reminder.findOneAndDelete({
      _id: req.params.id,
      elderId: req.user.id, // ✅ FIXED
    });

    if (!reminder) {
      return res.status(404).json({ message: "Reminder not found" });
    }

    res.json({ message: "Reminder deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  createReminder,
  getReminders,
  updateReminder,
  deleteReminder,
};
