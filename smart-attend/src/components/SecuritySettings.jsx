import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import API from "../api/settingsApi";

export default function SecuritySettings() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = async () => {
    try {
      await API.put("/auth/change-password", {
        email: user.email,
        currentPassword: form.currentPassword,
        newPassword: form.newPassword,
        confirmPassword: form.confirmPassword,
      });

      alert("Password Changed Successfully!");

      setForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Failed to Change Password"
      );
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-xl font-bold mb-5">
        Security Settings
      </h2>

      {/* Current Password */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">
          Current Password
        </label>

        <div className="relative">

          <Lock
            className="absolute left-3 top-3 text-gray-400"
            size={20}
          />

          <input
            type={showCurrent ? "text" : "password"}
            name="currentPassword"
            value={form.currentPassword}
            onChange={handleChange}
            placeholder="Current Password"
            className="w-full border rounded-lg p-3 pl-10 pr-10"
          />

          <button
            type="button"
            onClick={() => setShowCurrent(!showCurrent)}
            className="absolute right-3 top-3"
          >
            {showCurrent ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>

        </div>
      </div>

      {/* New Password */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">
          New Password
        </label>

        <div className="relative">

          <Lock
            className="absolute left-3 top-3 text-gray-400"
            size={20}
          />

          <input
            type={showNew ? "text" : "password"}
            name="newPassword"
            value={form.newPassword}
            onChange={handleChange}
            placeholder="New Password"
            className="w-full border rounded-lg p-3 pl-10 pr-10"
          />

          <button
            type="button"
            onClick={() => setShowNew(!showNew)}
            className="absolute right-3 top-3"
          >
            {showNew ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>

        </div>
      </div>

      {/* Confirm Password */}
      <div className="mb-5">
        <label className="block mb-2 font-medium">
          Confirm Password
        </label>

        <div className="relative">

          <Lock
            className="absolute left-3 top-3 text-gray-400"
            size={20}
          />

          <input
            type={showConfirm ? "text" : "password"}
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full border rounded-lg p-3 pl-10 pr-10"
          />

          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-3 top-3"
          >
            {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>

        </div>
      </div>

      <button
        onClick={handlePasswordChange}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
      >
        Change Password
      </button>

    </div>
  );
}