// const CaregiverRequest = require("../models/CaregiverRequest");

// exports.createRequest = async (req, res) => {
//   try {
//     const { caregiverId, message, preferredTime } = req.body;

//     const request = new CaregiverRequest({
//       elderId: req.user.id,
//       caregiverId,
//       message,
//       preferredTime,
//     });

//     await request.save();
//     res.status(201).json({ message: "Request sent successfully" });

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // For caregiver notifications
// exports.getCaregiverNotifications = async (req, res) => {
//   try {
//     const requests = await CaregiverRequest.find({
//       caregiverId: req.params.caregiverId,
//     })
//       .populate("elderId", "name")
//       .sort({ createdAt: -1 });

//     res.json(requests);

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// exports.getRequestsForCaregiver = async (req, res) => {
//   try {
//     const caregiverId = req.params.caregiverId;

//     const requests = await Request.find({ caregiverId })
//       .populate("elderId", "name")
//       .sort({ createdAt: -1 });

//     res.json(requests);

//   } catch (error) {
//     console.error("FETCH REQUEST ERROR:", error);
//     res.status(500).json({ message: "Failed to fetch requests" });
//   }
// };


// const CaregiverRequest = require("../models/CaregiverRequest");

// // CREATE REQUEST
// exports.createRequest = async (req, res) => {
//   try {
//     const { caregiverId, message, preferredTime } = req.body;

//     const request = new CaregiverRequest({
//       elderId: req.user.id,
//       caregiverId,
//       message,
//       preferredTime,
//       status: "pending",
//     });

//     await request.save();
//     res.status(201).json({ message: "Request sent successfully" });

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // FETCH CAREGIVER NOTIFICATIONS
// exports.getCaregiverNotifications = async (req, res) => {
//   try {
//     const { caregiverId } = req.params;

//     const requests = await CaregiverRequest.find({ caregiverId })
//       .populate("elderId", "name")
//       .sort({ createdAt: -1 });

//     res.json(requests);

//   } catch (error) {
//     console.error("FETCH ERROR:", error);
//     res.status(500).json({ message: error.message });
//   }
// };

// // ✅ ELDER NOTIFICATIONS
// const getElderNotifications = async (req, res) => {
//   try {
//     const requests = await CaregiverRequest.find({
//       elderId: req.user.id,
//       status: "accepted",
//     })
//       .populate("caregiverId", "name phone")
//       .sort({ createdAt: -1 });

//     res.json(requests);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // ✅ EXPORT IT
// module.exports = {
//   getElderNotifications,
// };

const CaregiverRequest = require("../models/CaregiverRequest");

// ================= CREATE REQUEST =================
const createRequest = async (req, res) => {
  try {
    const { caregiverId, message, preferredTime } = req.body;

    const request = new CaregiverRequest({
      elderId: req.user.id,
      caregiverId,
      message,
      preferredTime,
      status: "pending",
    });

    await request.save();
    res.status(201).json({ message: "Request sent successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ================= CAREGIVER NOTIFICATIONS =================
const getCaregiverNotifications = async (req, res) => {
  try {
    const { caregiverId } = req.params;

    const requests = await CaregiverRequest.find({ caregiverId })
      .populate("elderId", "name")
      .sort({ createdAt: -1 });

    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ================= ELDER NOTIFICATIONS =================
const getElderNotifications = async (req, res) => {
  try {
    const requests = await CaregiverRequest.find({
      elderId: req.user.id,
      status: "accepted",
    })
      .populate("caregiverId", "name phone")
      .sort({ createdAt: -1 });

    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ================= ACCEPT REQUEST =================
// ================= ACCEPT REQUEST =================
const acceptRequest = async (req, res) => {
  try {
    const requestId = req.params.id;

    const request = await CaregiverRequest.findById(requestId);
    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

    request.status = "accepted";
    await request.save();

    res.json({ message: "Request accepted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// ✅ EXPORT EVERYTHING ONCE
module.exports = {
  createRequest,
  getCaregiverNotifications,
  getElderNotifications,
  acceptRequest
};
