// controllers/transportController.js

const TransportRequest = require('../models/TransportRequest');

// Request transport
exports.requestTransport = async (req, res) => {
  try {
    const newRequest = new TransportRequest(req.body);
    await newRequest.save();
    res.status(201).json({ message: 'Transport request submitted', request: newRequest });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all transport requests for an elder
exports.getRequestsByElder = async (req, res) => {
  try {
    const requests = await TransportRequest.find({ elderId: req.params.elderId }).sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update request status
exports.updateStatus = async (req, res) => {
  try {
    const updated = await TransportRequest.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json({ message: 'Request status updated', request: updated });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
