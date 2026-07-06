const Leave = require("../models/Leave");

// Apply Leave
const applyLeave = async (req, res) => {
  try {
    const leave = await Leave.create(req.body);
    res.status(201).json(leave);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Leaves
const getLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find().populate("employee");
    res.json(leaves);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// Update Leave Status
const updateLeaveStatus = async (req, res) => {
  try {
    const leave = await Leave.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      { new: true }
    );

    res.json(leave);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  applyLeave,
  getLeaves,
  updateLeaveStatus,
};