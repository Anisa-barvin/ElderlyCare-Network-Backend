const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  addHealthRecord,
  getHealthHistory,
  getLatestHealthRecord,
} = require("../controllers/healthController");

router.post("/", auth, addHealthRecord);
router.get("/", auth, getHealthHistory);
router.get("/latest", auth, getLatestHealthRecord);

module.exports = router;
