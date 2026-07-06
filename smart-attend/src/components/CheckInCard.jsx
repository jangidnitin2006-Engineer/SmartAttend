import { Fingerprint } from "lucide-react";

export default function CheckInCard() {

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-2xl font-bold mb-6">
        Check In
      </h2>

      <button className="bg-green-600 hover:bg-green-700 text-white w-full py-4 rounded-xl flex justify-center items-center gap-3">

        <Fingerprint />

        Scan Fingerprint

      </button>

    </div>
  );
}