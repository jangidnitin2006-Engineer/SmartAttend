import {
  Bell,
  Search,
  UserCircle
} from "lucide-react";

export default function Navbar() {
  return (
    <div className="bg-white shadow h-20 flex justify-between items-center px-8">

      <div className="relative">

        <Search
          className="absolute left-4 top-3 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search..."
          className="border rounded-xl pl-12 py-3 w-80 outline-none"
        />

      </div>

      <div className="flex items-center gap-6">

        <Bell className="cursor-pointer" />

        <div className="flex items-center gap-3">

          <UserCircle size={40} />

          <div>

            <h2 className="font-bold">
              Admin
            </h2>

            <p className="text-sm text-gray-500">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}