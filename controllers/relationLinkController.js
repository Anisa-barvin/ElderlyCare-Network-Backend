// controllers/relationLinkController.js

const RelationLink = require('../models/RelationLink');

// Create a link between relation and elder
exports.linkRelationToElder = async (req, res) => {
  try {
    const newLink = new RelationLink(req.body);
    await newLink.save();
    res.status(201).json(newLink);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all elders linked to a relation
exports.getLinkedElders = async (req, res) => {
  try {
    const links = await RelationLink.find({ relationId: req.params.relationId }).populate('elderId');
    res.json(links);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all relations linked to an elder
exports.getLinkedRelations = async (req, res) => {
  try {
    const links = await RelationLink.find({ elderId: req.params.elderId }).populate('relationId');
    res.json(links);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
