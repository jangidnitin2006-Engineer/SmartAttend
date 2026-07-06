export default function LeaveForm() {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-2xl font-bold mb-6">
        Apply Leave
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <input
          type="date"
          className="border rounded-lg p-3"
        />

        <input
          type="date"
          className="border rounded-lg p-3"
        />

        <select className="border rounded-lg p-3">
          <option>Sick Leave</option>
          <option>Casual Leave</option>
          <option>Paid Leave</option>
        </select>

        <input
          type="text"
          placeholder="Reason"
          className="border rounded-lg p-3"
        />

      </div>

      <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        Submit Leave Request
      </button>

    </div>
  );
}