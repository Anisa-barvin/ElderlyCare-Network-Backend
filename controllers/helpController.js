const HelpQuery = require('../models/HelpQuery');

exports.submitHelpQuery = async (req, res) => {
  try {
    const { message } = req.body;

    const newQuery = new HelpQuery({
      user: req.user._id,
      userModel: req.user.role,
      message,
    });

    await newQuery.save();
    res.status(201).json({ message: 'Query submitted', data: newQuery });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
