import { useState } from "react";
import AttendanceAPI from "../../api/attendanceApi";

export default function AttendanceRow({ employee }) {
  const [status, setStatus] = useState("Present");

  const saveAttendance = async () => {
    try {
      await AttendanceAPI.post("/attendance", {
        employee: employee._id,
        date: new Date(),
        status,
      });

      alert(`${employee.fullName}'s attendance saved!`);
    } catch (error) {
  console.log(error);

  if (error.response) {
    console.log(error.response.data);
    alert(error.response.data.message);
  } else {
    alert(error.message);
  }
}
  };

  return (
    <tr className="border-b">
      <td className="p-3">{employee.employeeId}</td>
      <td>{employee.fullName}</td>
      <td>{employee.department}</td>

      <td>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border rounded-lg p-2"
        >
          <option>Present</option>
          <option>Absent</option>
          <option>Late</option>
        </select>
      </td>

      <td>
        <button
          onClick={saveAttendance}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Save
        </button>
      </td>
    </tr>
  );
}