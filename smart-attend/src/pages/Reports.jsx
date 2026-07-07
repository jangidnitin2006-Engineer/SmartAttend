import { useEffect, useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import API from "../api/employeeApi";
import AttendanceAPI from "../api/attendanceApi";
import LeaveAPI from "../api/leaveApi";

import EmployeeChart from "../components/Reports/EmployeeChart";
import LeaveChart from "../components/Reports/LeaveChart";
import ReportCards from "../components/Reports/ReportCards";
import DepartmentChart from "../components/Reports/DepartmentChart";
import AttendanceChart from "../components/Reports/AttendanceChart";
import ExportButtons from "../components/Reports/ExportButtons";

export default function Reports() {
  const [employees, setEmployees] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const emp = await API.get("/employees");
      const att = await AttendanceAPI.get("/attendance");
      const leave = await LeaveAPI.get("/");

      setEmployees(emp.data);
      setAttendance(att.data);
      setLeaves(leave.data);
    } catch (error) {
      console.log(error);
    }
  };

  const activeEmployees = employees.filter(
    (emp) => emp.status === "Active"
  ).length;

  const inactiveEmployees = employees.filter(
    (emp) => emp.status === "Inactive"
  ).length;

  const present = attendance.filter(
    (a) => a.status === "Present"
  ).length;

  const absent = attendance.filter(
    (a) => a.status === "Absent"
  ).length;

  const late = attendance.filter(
    (a) => a.status === "Late"
  ).length;

  const approvedLeaves = leaves.filter(
    (l) => l.status === "Approved"
  ).length;

  const rejectedLeaves = leaves.filter(
    (l) => l.status === "Rejected"
  ).length;

  const pendingLeaves = leaves.filter(
    (l) => l.status === "Pending"
  ).length;

  const employeeChartData = [
    { name: "Active", count: activeEmployees },
    { name: "Inactive", count: inactiveEmployees },
  ];

  const leaveChartData = [
    { name: "Approved", value: approvedLeaves },
    { name: "Rejected", value: rejectedLeaves },
    { name: "Pending", value: pendingLeaves },
  ];

  return (
    <MainLayout>

      <h1 className="text-4xl font-bold mb-8">
        Reports Dashboard
      </h1>

       <ExportButtons
      employees={employees}
      attendance={attendance}
      leaves={leaves}
    />


    <ReportCards
      employees={employees.length}
      present={present}
      absent={absent}
      leaves={leaves.length}
    />

    <div className="grid grid-cols-2 gap-6">
      <DepartmentChart employees={employees} />

      <AttendanceChart attendance={attendance} />
    </div>

      <div className="grid grid-cols-4 gap-6 mb-8">

        <div className="bg-blue-600 text-white rounded-xl p-6">
          <h3>Total Employees</h3>
          <h1 className="text-4xl font-bold">
            {employees.length}
          </h1>
        </div>

        <div className="bg-green-600 text-white rounded-xl p-6">
          <h3>Present</h3>
          <h1 className="text-4xl font-bold">
            {present}
          </h1>
        </div>

        <div className="bg-red-600 text-white rounded-xl p-6">
          <h3>Absent</h3>
          <h1 className="text-4xl font-bold">
            {absent}
          </h1>
        </div>

        <div className="bg-yellow-500 text-white rounded-xl p-6">
          <h3>Late</h3>
          <h1 className="text-4xl font-bold">
            {late}
          </h1>
        </div>

      </div>

      <div className="grid grid-cols-2 gap-8">

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold mb-5">
            Employee Statistics
          </h2>

          <EmployeeChart data={employeeChartData} />
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold mb-5">
            Leave Statistics
          </h2>

          <LeaveChart data={leaveChartData} />
        </div>

      </div>

    </MainLayout>
  );
}