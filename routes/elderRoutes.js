// const express = require("express");
// const router = express.Router();
// const auth = require("../middleware/authMiddleware");
// const { getElderProfile, updateElderProfile } = require("../controllers/elderController");

// // GET profile
// router.get("/me", auth, getElderProfile);

// // UPDATE profile
// router.put("/update", auth, updateElderProfile);

// module.exports = router;


const express = require("express");
const router = express.Router();
const { getElderProfile, updateElderProfile } = require("../controllers/elderController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/me", authMiddleware, getElderProfile);
router.put("/update", authMiddleware, updateElderProfile);

module.exports = router;
