const express = require("express");
const router = express.Router();

const {
  getSettings,
  saveSettings,
} = require("../controllers/settingsController");

// Get Settings
router.get("/", getSettings);

// Save / Update Settings
router.put("/", saveSettings);

module.exports = router;