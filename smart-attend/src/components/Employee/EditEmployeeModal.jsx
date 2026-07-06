import { useState, useEffect } from "react";

export default function EditEmployeeModal({
  employee,
  closeModal,
  updateEmployee,
}) {
  const [formData, setFormData] = useState({
    _id: "",
    employeeId: "",
    fullName: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    salary: "",
    joiningDate: "",
    status: "Active",
  });

  useEffect(() => {
    if (employee) {
      setFormData({
        ...employee,
        joiningDate: employee.joiningDate
          ? employee.joiningDate.substring(0, 10)
          : "",
      });
    }
  }, [employee]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateEmployee(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white w-[650px] rounded-xl p-6">

        <h2 className="text-2xl font-bold mb-6">
          Edit Employee
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-4"
        >
          <input
            name="employeeId"
            value={formData.employeeId}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            placeholder="Employee ID"
          />

          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            placeholder="Full Name"
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            placeholder="Email"
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            placeholder="Phone"
          />

          <input
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            placeholder="Department"
          />

          <input
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            placeholder="Designation"
          />

          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            placeholder="Salary"
          />

          <input
            type="date"
            name="joiningDate"
            value={formData.joiningDate}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border p-3 rounded-lg col-span-2"
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <div className="col-span-2 flex justify-end gap-3">

            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-300 px-5 py-2 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              Update Employee
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}