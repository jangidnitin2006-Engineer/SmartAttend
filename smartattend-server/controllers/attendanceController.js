const Attendance = require("../models/Attendance");

// ===============================
// Mark Attendance (Check In)
// ===============================
const markAttendance = async (req, res) => {
  try {
    const { employee, checkIn, status } = req.body;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Check if attendance already exists for today
    const attendanceExists = await Attendance.findOne({
      employee,
      date: {
        $gte: today,
        $lt: new Date(today.getTime() + 24 * 60 * 60 * 1000),
      },
    });

    if (attendanceExists) {
      return res.status(400).json({
        message: "Attendance already marked today",
      });
    }

    const attendance = await Attendance.create({
      employee,
      date: new Date(),
      checkIn,
      status,
    });

    res.status(201).json(attendance);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ===============================
// Get All Attendance
// ===============================
const getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find()
      .populate(
        "employee",
        "employeeId fullName department designation"
      )
      .sort({ date: -1 });

    res.json(attendance);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ===============================
// Check Out
// ===============================
const checkOut = async (req, res) => {
  try {
    const attendance = await Attendance.findById(req.params.id);

    if (!attendance) {
      return res.status(404).json({
        message: "Attendance Not Found",
      });
    }

    attendance.checkOut = new Date();

    if (attendance.checkIn) {
      const diff =
        attendance.checkOut - attendance.checkIn;

      const hours = Math.floor(diff / 3600000);

      const minutes = Math.floor(
        (diff % 3600000) / 60000
      );

      attendance.workingHours =
        `${hours}h ${minutes}m`;
    }

    await attendance.save();

    res.json(attendance);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ===============================
// Delete Attendance
// ===============================
const deleteAttendance = async (req, res) => {
  try {
    await Attendance.findByIdAndDelete(req.params.id);

    res.json({
      message: "Attendance Deleted Successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  markAttendance,
  getAttendance,
  checkOut,
  deleteAttendance,
};