// controllers/relationController.js

exports.linkRelation = async (req, res) => {
    try {
      // Logic to link relation
      res.status(200).json({ message: 'Relation linked successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  