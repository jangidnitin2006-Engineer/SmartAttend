export default function Pagination() {
  return (
    <div className="flex justify-end gap-2 mt-6">
      <button className="px-4 py-2 border rounded-lg">Previous</button>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
        1
      </button>
      <button className="px-4 py-2 border rounded-lg">2</button>
      <button className="px-4 py-2 border rounded-lg">3</button>
      <button className="px-4 py-2 border rounded-lg">Next</button>
    </div>
  );
}