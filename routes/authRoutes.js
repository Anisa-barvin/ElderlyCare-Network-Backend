const express = require('express');
const router = express.Router();
const auth = require("../middleware/authMiddleware");

const { register, login,changePassword,verifyOtp} = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.put('/change-password', auth, changePassword); //for elder can change password
router.post("/verify-otp", verifyOtp);

module.exports = router;   // ✅ FIXED — export router ONLY
