const leaves = [
  {
    id: 1,
    employee: "Rahul Sharma",
    from: "05 Jul 2026",
    to: "07 Jul 2026",
    type: "Sick Leave",
    status: "Approved",
  },
  {
    id: 2,
    employee: "Priya Patel",
    from: "12 Jul 2026",
    to: "14 Jul 2026",
    type: "Casual Leave",
    status: "Pending",
  },
];

export default function LeaveTable() {
  return (
    <div className="bg-white rounded-xl shadow mt-8 overflow-hidden">

      <table className="w-full">

        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-4">ID</th>
            <th>Employee</th>
            <th>From</th>
            <th>To</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {leaves.map((leave) => (

            <tr key={leave.id} className="border-b hover:bg-gray-50">

              <td className="p-4">{leave.id}</td>
              <td>{leave.employee}</td>
              <td>{leave.from}</td>
              <td>{leave.to}</td>
              <td>{leave.type}</td>

              <td>
                <span
                  className={`px-3 py-1 rounded-full text-white ${
                    leave.status === "Approved"
                      ? "bg-green-500"
                      : leave.status === "Pending"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                >
                  {leave.status}
                </span>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}