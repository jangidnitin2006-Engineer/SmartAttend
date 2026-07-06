import {
  LayoutDashboard,
  Users,
  CalendarDays,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const menu = [
  {
    title: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    path: "/dashboard",
    roles: ["Admin", "HR", "Employee"],
  },
  {
    title: "Employees",
    icon: <Users size={20} />,
    path: "/employees",
    roles: ["Admin", "HR"],
  },
  {
    title: "Attendance",
    icon: <CalendarDays size={20} />,
    path: "/attendance",
    roles: ["Admin", "HR", "Employee"],
  },
  {
    title: "Leave",
    icon: <CalendarDays size={20} />,
    path: "/leave",
    roles: ["Admin", "HR", "Employee"],
  },
  {
    title: "Reports",
    icon: <FileText size={20} />,
    path: "/reports",
    roles: ["Admin", "HR"],
  },
  {
    title: "Settings",
    icon: <Settings size={20} />,
    path: "/settings",
    roles: ["Admin"],
  },
];

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white flex flex-col">

      {/* Logo */}
      <div className="text-center py-8 border-b border-slate-700">
        <h1 className="text-2xl font-bold">SmartAttend</h1>
        <p className="text-slate-400 text-sm">
          {user?.role || "HR Management"}
        </p>
      </div>

      {/* Menu */}
      <div className="flex-1 mt-5">

        {menu
          .filter((item) => item.roles.includes(user?.role))
          .map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className={`flex items-center gap-4 px-6 py-4 transition-all duration-300 ${
                location.pathname === item.path
                  ? "bg-blue-600"
                  : "hover:bg-slate-800"
              }`}
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          ))}

      </div>

      {/* User Info */}
      <div className="px-6 py-4 border-t border-slate-700">

        <p className="font-semibold">
          {user?.name}
        </p>

        <p className="text-sm text-slate-400">
          {user?.role}
        </p>

      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-4 px-6 py-5 bg-red-600 hover:bg-red-700"
      >
        <LogOut size={20} />
        Logout
      </button>

    </div>
  );
}