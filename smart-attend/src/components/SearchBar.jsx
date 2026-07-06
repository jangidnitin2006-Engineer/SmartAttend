export default function SearchBar() {
  return (
    <input
      type="text"
      placeholder="Search employee..."
      className="border rounded-xl px-4 py-3 w-80 outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}