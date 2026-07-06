import { Fingerprint } from "lucide-react";

export default function FingerprintModal() {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

      <div className="bg-white rounded-2xl p-10 text-center w-[400px]">

        <Fingerprint
          size={80}
          className="mx-auto text-blue-600"
        />

        <h2 className="text-2xl font-bold mt-5">
          Scan Fingerprint
        </h2>

        <p className="text-gray-500 mt-3">
          Place your finger on the scanner...
        </p>

      </div>

    </div>
  );
}