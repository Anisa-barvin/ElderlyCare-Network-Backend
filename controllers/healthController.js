const HealthRecord = require("../models/HealthRecord");

// ADD RECORD
exports.addHealthRecord = async (req, res) => {
  try {
    const record = await HealthRecord.create({
      elderId: req.user.id,
      ...req.body,
    });

    res.status(201).json(record);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL RECORDS
exports.getHealthHistory = async (req, res) => {
  try {
    console.log("ELDER ID FROM TOKEN:", req.user.id);

    const records = await HealthRecord.find({
      elderId: req.user.id,
    }).sort({ createdAt: -1 });

    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET LATEST RECORD
exports.getLatestHealthRecord = async (req, res) => {
  try {
    const record = await HealthRecord.findOne({ elderId: req.user.id })
      .sort({ createdAt: -1 });

    res.json(record);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
