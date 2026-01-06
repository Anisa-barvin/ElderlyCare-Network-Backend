const express = require("express");
const router = express.Router();
const User = require("../models/User");
const auth = require("../middleware/authMiddleware");

router.get("/elders", auth, async (req, res) => {
  const elders = await User.find({
    role: "elder",
    _id: { $ne: req.user.id },
  }).select("name");

  res.json(elders);
});

module.exports = router;
