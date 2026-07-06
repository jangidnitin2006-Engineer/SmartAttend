import { FileSpreadsheet, FileText } from "lucide-react";

export default function ExportButtons() {
  return (
    <div className="flex gap-4">

      <button className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-green-700">

        <FileSpreadsheet />

        Export Excel

      </button>

      <button className="bg-red-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-red-700">

        <FileText />

        Export PDF

      </button>

    </div>
  );
}