const { protect } = require("../middleware/authMiddleware");
const express = require("express");

const router = express.Router();

const {
  applyLeave,
  getLeaves,
  updateLeaveStatus,
} = require("../controllers/leaveController");

router.post("/", protect, applyLeave);

router.get("/", protect, getLeaves);

router.put("/:id", protect, updateLeaveStatus);

module.exports = router;