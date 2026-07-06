export default function EmployeeSearch({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search Employee..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full border rounded-xl px-4 py-3"
    />
  );
}