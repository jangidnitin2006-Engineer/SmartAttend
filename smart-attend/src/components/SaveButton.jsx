import { Save } from "lucide-react";

export default function SaveButton({ onSave }) {
  return (
    <div className="flex justify-end">

      <button
        onClick={onSave}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow transition"
      >
        <Save size={20} />
        Save All Settings
      </button>

    </div>
  );
}