// controllers/doctorController.js

// Dummy controller function to get all doctors
exports.getAllDoctors = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'List of all doctors',
    data: [
      { id: 1, name: 'Dr. John Doe', specialty: 'Cardiology' },
      { id: 2, name: 'Dr. Jane Smith', specialty: 'Neurology' }
    ]
  });
};
