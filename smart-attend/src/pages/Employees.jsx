import { useState, useEffect } from "react";

import Sidebar from "../components/Sidebar";
import EmployeeTable from "../components/Employee/EmployeeTable";
import EmployeeSearch from "../components/Employee/EmployeeSearch";
import DepartmentFilter from "../components/Employee/DepartmentFilter";
import AddEmployeeModal from "../components/Employee/AddEmployeeModal";
import EditEmployeeModal from "../components/Employee/EditEmployeeModal";

import API from "../api/employeeApi";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  // Fetch Employees
  const fetchEmployees = async () => {
    try {
      const response = await API.get("/employees");
      setEmployees(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Load employees on page load
  useEffect(() => {
    fetchEmployees();
  }, []);

  // Search + Filter
  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch =
      emp.fullName.toLowerCase().includes(search.toLowerCase()) ||
      emp.employeeId.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" || emp.department === department;

    return matchesSearch && matchesDepartment;
  });

  // Add Employee
const addEmployee = async (newEmployee) => {
  try {
    console.log("Sending Data:", newEmployee);

    const response = await API.post("/employees", newEmployee);

    console.log("Employee Saved Successfully:", response.data);

    // Reload all employees from MongoDB
    await fetchEmployees();

    // Close the modal
    setShowModal(false);

    alert("Employee Added Successfully!");
  } catch (error) {
    console.error("Add Employee Error:", error);

    if (error.response) {
      console.log("Status:", error.response.status);
      console.log("Response:", error.response.data);

      alert(
        error.response.data.message ||
          "Failed to add employee."
      );
    } else {
      alert("Server not responding.");
    }
  }
};
  

  // Edit Employee
  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setShowEditModal(true);
  };

  const updateEmployee = async (updatedEmployee) => {
    try {
      await API.put(`/employees/${updatedEmployee._id}`, updatedEmployee);
      fetchEmployees();
      setShowEditModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Employee
const deleteEmployee = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this employee?"
  );

  if (!confirmDelete) return;

  try {
    await API.delete(`/employees/${id}`);

    fetchEmployees();

    alert("Employee Deleted Successfully!");
  } catch (error) {
    console.log(error);
    alert("Failed to Delete Employee");
  }
};

  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold">
              Employee Management
            </h1>

            <p className="text-gray-500 mt-2">
              Manage all employees
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
          >
            + Add Employee
          </button>
        </div>

        <div className="bg-white p-5 rounded-xl shadow mb-6 flex flex-col md:flex-row gap-5">

          <div className="flex-1">
            <EmployeeSearch
              search={search}
              setSearch={setSearch}
            />
          </div>

          <DepartmentFilter
            department={department}
            setDepartment={setDepartment}
          />

        </div>

        <EmployeeTable
          employees={filteredEmployees}
          onEdit={handleEdit}
          onDelete={deleteEmployee}
        />

        {showModal && (
          <AddEmployeeModal
            closeModal={() => setShowModal(false)}
            addEmployee={addEmployee}
          />
        )}

        {showEditModal && (
          <EditEmployeeModal
            employee={selectedEmployee}
            closeModal={() => setShowEditModal(false)}
            updateEmployee={updateEmployee}
          />
        )}

      </div>
    </div>
  );
}