export default function DeleteEmployeeModal() {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-6 w-[400px]">
        <h2 className="text-2xl font-bold mb-4">
          Delete Employee
        </h2>

        <p>Are you sure you want to delete this employee?</p>

        <div className="flex justify-end gap-4 mt-6">
          <button className="px-4 py-2 border rounded-lg">
            Cancel
          </button>

          <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}