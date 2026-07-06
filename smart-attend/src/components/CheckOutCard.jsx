import { LogOut } from "lucide-react";

export default function CheckOutCard() {

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-2xl font-bold mb-6">
        Check Out
      </h2>

      <button className="bg-red-600 hover:bg-red-700 text-white w-full py-4 rounded-xl flex justify-center items-center gap-3">

        <LogOut />

        Check Out

      </button>

    </div>
  );
}