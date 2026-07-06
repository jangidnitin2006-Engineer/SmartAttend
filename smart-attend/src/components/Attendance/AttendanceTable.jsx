import AttendanceRow from "./AttendanceRow";

export default function AttendanceTable({ employees }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">

      <table className="w-full">

       <thead className="bg-blue-600 text-white">
  <tr>
    <th className="p-3">Employee ID</th>
    <th>Name</th>
    <th>Department</th>
    <th>Status</th>
    <th>Action</th>
  </tr>
</thead>
        <tbody>

          {employees.map((emp) => (
            <AttendanceRow
              key={emp._id}
              employee={emp}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}