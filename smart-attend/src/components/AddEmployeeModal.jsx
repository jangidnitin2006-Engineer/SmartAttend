export default function AddEmployeeModal() {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-6 w-500px">
        <h2 className="text-2xl font-bold mb-5">
          Add Employee
        </h2>

        <input
          className="w-full border p-3 rounded-lg mb-4"
          placeholder="Employee Name"
        />

        <input
          className="w-full border p-3 rounded-lg mb-4"
          placeholder="Department"
        />

        <input
          className="w-full border p-3 rounded-lg mb-4"
          placeholder="Position"
        />

        <button className="bg-blue-600 text-white px-5 py-3 rounded-xl">
          Save
        </button>
      </div>
    </div>
  );
}