const { protect } = require("../middleware/authMiddleware");
const express = require("express");
const router = express.Router();

const {
  markAttendance,
  getAttendance,
} = require("../controllers/attendanceController");

router.post("/", protect, markAttendance);
router.get("/", protect, getAttendance);

module.exports = router;