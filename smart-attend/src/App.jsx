import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";
import Leave from "./pages/Leave";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

import ProtectedRoute from "./components/ProtectedRoute";
import RoleRoute from "./components/RoleRoute";

export default function App() {
  return (
    <Routes>

      {/* Public Route */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />

      {/* Dashboard - All Users */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Employees - Admin & HR */}
      <Route
        path="/employees"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["Admin", "HR"]}>
              <Employees />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      {/* Attendance - All Users */}
      <Route
        path="/attendance"
        element={
          <ProtectedRoute>
            <Attendance />
          </ProtectedRoute>
        }
      />

      {/* Leave - All Users */}
      <Route
        path="/leave"
        element={
          <ProtectedRoute>
            <Leave />
          </ProtectedRoute>
        }
      />

      {/* Reports - Admin & HR */}
      <Route
        path="/reports"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["Admin", "HR"]}>
              <Reports />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      {/* Settings - Admin Only */}
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["Admin"]}>
              <Settings />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}