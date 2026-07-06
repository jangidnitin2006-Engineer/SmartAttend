export default function DepartmentFilter({
  department,
  setDepartment,
}) {
  return (
    <select
      value={department}
      onChange={(e) => setDepartment(e.target.value)}
      className="border rounded-xl px-4 py-3"
    >
      <option value="All">All Departments</option>
      <option value="IT">IT</option>
      <option value="HR">HR</option>
      <option value="Finance">Finance</option>
      <option value="Marketing">Marketing</option>
    </select>
  );
}