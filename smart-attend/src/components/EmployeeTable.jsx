const employees = [
  {
    id: 1,
    name: "Rahul Sharma",
    department: "IT",
    position: "Frontend Developer",
    status: "Present",
  },
  {
    id: 2,
    name: "Priya Patel",
    department: "HR",
    position: "HR Manager",
    status: "Present",
  },
  {
    id: 3,
    name: "Amit Kumar",
    department: "Accounts",
    position: "Accountant",
    status: "Absent",
  },
];

export default function EmployeeTable() {
  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-blue-600 text-white">

          <tr>
            <th className="p-4 text-left">ID</th>
            <th className="p-4 text-left">Employee</th>
            <th className="p-4 text-left">Department</th>
            <th className="p-4 text-left">Position</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Action</th>
          </tr>

        </thead>

        <tbody>

          {employees.map((emp) => (
            <tr key={emp.id} className="border-b hover:bg-gray-50">

              <td className="p-4">{emp.id}</td>
              <td className="p-4">{emp.name}</td>
              <td className="p-4">{emp.department}</td>
              <td className="p-4">{emp.position}</td>

              <td className="p-4">
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

              <td className="p-4 space-x-2">
                <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                  Edit
                </button>

                <button className="bg-red-600 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}