import { Pencil, Trash2 } from "lucide-react";

export default function EmployeeTable({
  employees,
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-white rounded-xl shadow overflow-x-auto">

      <table className="w-full">

        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-3">Employee ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {employees.length === 0 ? (
            <tr>
              <td
                colSpan="6"
                className="text-center p-6 text-gray-500"
              >
                No Employees Found
              </td>
            </tr>
          ) : (
            employees.map((emp) => (
              <tr
                key={emp.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-3">
                  {emp.employeeId}
                </td>

                <td>
                  {emp.fullName}
                </td>

                <td>
                  {emp.department}
                </td>

                <td>
                  {emp.designation}
                </td>

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

                <td>
                  <div className="flex gap-3 justify-center">

                    <button
                      onClick={() => onEdit(emp)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() => onDelete(emp.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>
                </td>

              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>
  );
}