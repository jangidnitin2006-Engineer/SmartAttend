const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  changePassword,
} = require("../controllers/authController");

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Change Password
router.put("/change-password", changePassword);

module.exports = router;