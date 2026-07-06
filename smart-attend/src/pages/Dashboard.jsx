import { useEffect, useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import DashboardCard from "../components/DashboardCard";
import API from "../api/employeeApi";

export default function Dashboard() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);
  console.log("API URL:", import.meta.env.VITE_API_URL);

  const fetchEmployees = async () => {
    try {
      const res = await API.get("/employees");
      console.log("Employee Response:", res);
console.log("Employee Data:", res.data);

setEmployees(res.data);

      console.log("Employee API Response:", res.data);

      // Ensure employees is always an array
      if (Array.isArray(res.data)) {
        setEmployees(res.data);
      } else if (Array.isArray(res.data.employees)) {
        setEmployees(res.data.employees);
      } else {
        console.error("Unexpected API response:", res.data);
        setEmployees([]);
      }
    } catch (error) {
      console.error("Employee Fetch Error:", error);
      setEmployees([]);
    }
  };

  const totalEmployees = employees.length;

  const activeEmployees = employees.filter(
    (emp) => emp.status === "Active"
  ).length;

  const inactiveEmployees = employees.filter(
    (emp) => emp.status === "Inactive"
  ).length;

  const totalDepartments = [
    ...new Set(employees.map((emp) => emp.department)),
  ].length;

  return (
    <MainLayout>
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Dashboard
      </h1>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        <DashboardCard
          title="Total Employees"
          value={totalEmployees}
          color="bg-blue-600"
        />

        <DashboardCard
          title="Active Employees"
          value={activeEmployees}
          color="bg-green-600"
        />

        <DashboardCard
          title="Inactive Employees"
          value={inactiveEmployees}
          color="bg-red-600"
        />

        <DashboardCard
          title="Departments"
          value={totalDepartments}
          color="bg-purple-600"
        />

      </div>

      {/* Attendance */}
      <div className="bg-white rounded-2xl shadow mt-8 p-6">
        <h2 className="text-2xl font-bold mb-4">
          Attendance Overview
        </h2>

        <div className="h-72 flex justify-center items-center border rounded-xl text-gray-500">
          📊 Attendance Chart (Coming Soon)
        </div>
      </div>

      {/* Recent Employees */}
      <div className="bg-white rounded-2xl shadow mt-8 p-6 overflow-x-auto">

        <h2 className="text-2xl font-bold mb-4">
          Recent Employees
        </h2>

        <table className="min-w-full">

          <thead className="bg-gray-100">

            <tr>
              <th className="p-3 text-left">Employee ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Designation</th>
              <th className="p-3 text-left">Status</th>
            </tr>

          </thead>

          <tbody>

            {employees.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-8 text-gray-500"
                >
                  No Employees Found
                </td>
              </tr>
            ) : (
              employees
                .slice()
                .reverse()
                .slice(0, 5)
                .map((emp) => (
                  <tr
                    key={emp._id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-3">{emp.employeeId}</td>
                    <td>{emp.fullName}</td>
                    <td>{emp.department}</td>
                    <td>{emp.designation}</td>
                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-white ${
                          emp.status === "Active"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      >
                        {emp.status}
                      </span>
                    </td>
                  </tr>
                ))
            )}

          </tbody>

        </table>

      </div>

    </MainLayout>
  );
}