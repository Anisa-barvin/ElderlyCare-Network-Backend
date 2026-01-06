// controllers/wellnessResourceController.js

const WellnessResource = require('../models/WellnessResource');

// Create a new wellness resource
exports.createWellnessResource = async (req, res) => {
  try {
    const newResource = new WellnessResource({
      ...req.body,
      createdBy: req.user._id // assuming user is authenticated
    });
    await newResource.save();
    res.status(201).json({ message: 'Wellness resource created', resource: newResource });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all wellness resources
exports.getAllWellnessResources = async (req, res) => {
  try {
    const resources = await WellnessResource.find().sort({ createdAt: -1 }); // Sorting by latest
    res.json(resources);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get resources by category
exports.getResourcesByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const resources = await WellnessResource.find({ category });
    res.json(resources);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
