import { useEffect, useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import DashboardCard from "../components/DashboardCard";
import API from "../api/employeeApi";

export default function Dashboard() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await API.get("/employees");
      setEmployees(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Statistics
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

     <h1 className="text-2xl md:text-3xl font-bold">
        Dashboard
      </h1>

      {/* Statistics Cards */}
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

      {/* Attendance Overview */}
      <div className="bg-white rounded-2xl shadow mt-6 md:mt-10 p-4 md:p-8">

        <h2 className="text-2xl font-bold mb-6">
          Attendance Overview
        </h2>

        <div className="h-80 flex items-center justify-center border rounded-xl text-gray-400">
          📊 Attendance Chart (Coming Soon)
        </div>

      </div>

      {/* Recent Employees */}
      <div className="bg-white rounded-2xl shadow mt-10 p-8">

        <h2 className="text-2xl font-bold mb-6">
          Recent Employees
        </h2>

        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Employee ID</th>
              <th className="text-left">Name</th>
              <th className="text-left">Department</th>
              <th className="text-left">Designation</th>
              <th className="text-left">Status</th>
            </tr>
          </thead>

          <tbody>

            {employees
              .slice()
              .reverse()
              .slice(0, 5)
              .map((emp) => (
                <tr key={emp._id} className="border-b hover:bg-gray-50">

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
              ))}

          </tbody>

        </table>

      </div>

    </MainLayout>
  );
}