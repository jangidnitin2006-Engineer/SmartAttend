import { useEffect, useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import LeaveAPI from "../api/leaveApi";
import ApplyLeaveModal from "../components/Leave/ApplyLeaveModal";

export default function Leave() {
  const [leaves, setLeaves] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchLeaves();
  }, []);

  // Fetch all leave requests
  const fetchLeaves = async () => {
    try {
      const res = await LeaveAPI.get("/");
      setLeaves(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Fetch Leave Error:", error);
    }
  };

  // Approve / Reject Leave
  const updateStatus = async (id, status) => {
    try {
      await LeaveAPI.put(`/${id}`, { status });

      alert(`Leave ${status} Successfully`);

      fetchLeaves();
    } catch (error) {
      console.error("Update Error:", error);

      if (error.response) {
        console.log(error.response.data);
      }

      alert("Failed to update leave status.");
    }
  };

  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          Leave Management
        </h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700"
        >
          + Apply Leave
        </button>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-4">Employee</th>
              <th>Leave Type</th>
              <th>From</th>
              <th>To</th>
              <th>Reason</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {leaves.length > 0 ? (
              leaves.map((leave) => (
                <tr
                  key={leave._id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4">
                    {leave.employee?.fullName || "N/A"}
                  </td>

                  <td>{leave.leaveType}</td>

                  <td>
                    {new Date(leave.fromDate).toLocaleDateString()}
                  </td>

                  <td>
                    {new Date(leave.toDate).toLocaleDateString()}
                  </td>

                  <td>{leave.reason}</td>

                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-white ${
                        leave.status === "Approved"
                          ? "bg-green-500"
                          : leave.status === "Rejected"
                          ? "bg-red-500"
                          : "bg-yellow-500"
                      }`}
                    >
                      {leave.status}
                    </span>
                  </td>

                  <td>
                    <div className="flex gap-2 justify-center">
                      <button
                        onClick={() =>
                          updateStatus(leave._id, "Approved")
                        }
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() =>
                          updateStatus(leave._id, "Rejected")
                        }
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-8 text-gray-500"
                >
                  No leave requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showModal && (
        <ApplyLeaveModal
          closeModal={() => setShowModal(false)}
          refreshLeaves={fetchLeaves}
        />
      )}
    </MainLayout>
  );
}