const data = [
  {
    id: 1,
    name: "Rahul Sharma",
    date: "01-07-2026",
    checkIn: "09:05 AM",
    checkOut: "06:15 PM",
    status: "Present",
  },
  {
    id: 2,
    name: "Priya Patel",
    date: "01-07-2026",
    checkIn: "--",
    checkOut: "--",
    status: "Absent",
  },
];

export default function AttendanceTable() {
  return (
    <div className="bg-white rounded-2xl shadow mt-8 overflow-hidden">

      <table className="w-full">

        <thead className="bg-blue-600 text-white">

          <tr>

            <th className="p-4">ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {data.map((emp) => (

            <tr
              key={emp.id}
              className="border-b hover:bg-gray-50"
            >

              <td className="p-4">{emp.id}</td>

              <td>{emp.name}</td>

              <td>{emp.date}</td>

              <td>{emp.checkIn}</td>

              <td>{emp.checkOut}</td>

              <td>

                <span
                  className={`px-3 py-1 rounded-full text-white ${
                    emp.status === "Present"
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
  );
}