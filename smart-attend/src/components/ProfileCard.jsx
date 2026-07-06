import { User, Mail, Phone, Briefcase } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function ProfileCard() {
  const { user } = useAuth();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-xl font-bold mb-5">
        Profile Information
      </h2>

      <div className="flex items-center gap-5">

        <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center">
          <User size={50} className="text-white" />
        </div>

        <div className="space-y-2">

          <div className="flex items-center gap-2">
            <User size={18} className="text-blue-600" />
            <span className="font-semibold">
              {user?.name || "Admin"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={18} className="text-blue-600" />
            <span>
              {user?.email || "admin@smartattend.com"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Briefcase size={18} className="text-blue-600" />
            <span>
              {user?.role || "Administrator"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Phone size={18} className="text-blue-600" />
            <span>+91 XXXXX XXXXX</span>
          </div>

        </div>

      </div>

    </div>
  );
}