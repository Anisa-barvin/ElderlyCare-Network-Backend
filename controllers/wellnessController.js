// controllers/wellnessController.js

const WellnessResource = require('../models/WellnessResource');

// Add a wellness resource
exports.createResource = async (req, res) => {
  try {
    const newResource = new WellnessResource(req.body);
    await newResource.save();
    res.status(201).json({ message: 'Wellness resource added', resource: newResource });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all resources (or filter by category)
exports.getAllResources = async (req, res) => {
  try {
    const filter = req.query.category ? { category: req.query.category } : {};
    const resources = await WellnessResource.find(filter).sort({ publishedAt: -1 });
    res.json(resources);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single resource by ID
exports.getResourceById = async (req, res) => {
  try {
    const resource = await WellnessResource.findById(req.params.id);
    if (!resource) return res.status(404).json({ error: 'Not found' });
    res.json(resource);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
