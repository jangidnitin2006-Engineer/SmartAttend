const { protect } = require("../middleware/authMiddleware");
const express = require("express");

const router = express.Router();

const {
  createEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

// Create Employee
router.post("/", protect, createEmployee);

// Get All Employees
router.get("/", protect,  getEmployees);

// Get One Employee
router.get("/:id",  protect, getEmployee);

// Update Employee
router.put("/:id", protect, updateEmployee);

// Delete Employee
router.delete("/:id",  protect,deleteEmployee);

module.exports = router;