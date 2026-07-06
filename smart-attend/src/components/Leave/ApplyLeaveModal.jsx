import { useEffect, useState } from "react";
import API from "../../api/employeeApi";
import LeaveAPI from "../../api/leaveApi";

export default function ApplyLeaveModal({
  closeModal,
  refreshLeaves,
}) {
  const [employees, setEmployees] = useState([]);

  const [formData, setFormData] = useState({
    employee: "",
    leaveType: "Sick",
    fromDate: "",
    toDate: "",
    reason: "",
  });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await LeaveAPI.post("/leave", formData);

      alert("Leave Applied Successfully!");

      refreshLeaves();

      closeModal();
    } catch (error) {
      console.log(error);
      alert("Failed to Apply Leave");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white w-[600px] rounded-xl p-6">

        <h2 className="text-2xl font-bold mb-6">
          Apply Leave
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <select
            name="employee"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          >
            <option value="">Select Employee</option>

            {employees.map((emp) => (
              <option
                key={emp._id}
                value={emp._id}
              >
                {emp.fullName}
              </option>
            ))}
          </select>

          <select
            name="leaveType"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option>Sick</option>
            <option>Casual</option>
            <option>Paid</option>
            <option>Emergency</option>
          </select>

          <input
            type="date"
            name="fromDate"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="date"
            name="toDate"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <textarea
            name="reason"
            placeholder="Reason"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <div className="flex justify-end gap-3">

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
              Apply
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}