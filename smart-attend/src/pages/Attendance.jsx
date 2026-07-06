import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import API from "../api/employeeApi";
import AttendanceTable from "../components/Attendance/AttendanceTable";

export default function Attendance() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await API.get("/employees");
      setEmployees(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex bg-slate-100 min-h-screen">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-8">
          Attendance Management
        </h1>

        <AttendanceTable employees={employees} />

      </div>

    </div>
  );
}