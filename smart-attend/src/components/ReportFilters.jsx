export default function ReportFilters() {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex gap-4">

      <input
        type="date"
        className="border rounded-lg p-3"
      />

      <select className="border rounded-lg p-3">
        <option>All Departments</option>
        <option>HR</option>
        <option>IT</option>
        <option>Finance</option>
      </select>

      <input
        placeholder="Search Employee..."
        className="border rounded-lg p-3 flex-1"
      />

    </div>
  );
}