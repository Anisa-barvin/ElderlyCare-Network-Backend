// const express = require("express");
// const router = express.Router();
// const auth = require("../middleware/authMiddleware");
// const {
//   createRequest,
//   getCaregiverNotifications,
// } = require("../controllers/requestController");

// router.post("/", auth, createRequest);
// router.get("/caregiver/:id", auth, getCaregiverNotifications);

// module.exports = router;


const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
//const { getElderNotifications } = require("../controllers/requestController");

const {
  createRequest,
  getCaregiverNotifications,
  getElderNotifications,
  acceptRequest
} = require("../controllers/requestController");

router.post("/", auth, createRequest);
router.get("/caregiver/:caregiverId", auth, getCaregiverNotifications);
router.get("/elder", auth, getElderNotifications);
router.put("/:id/accept", auth, acceptRequest);

module.exports = router;
