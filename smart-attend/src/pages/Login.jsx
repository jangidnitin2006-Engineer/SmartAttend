import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  Fingerprint,
} from "lucide-react";

import AuthAPI from "../api/authApi";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await AuthAPI.post("/login", {
        email,
        password,
      });

      login(res.data.user, res.data.token);

      alert("Login Successful!");

      navigate("/dashboard");

    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-900 to-slate-900 flex items-center justify-center p-6">

      <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-blue-600 p-8 text-center">

          <div className="w-20 h-20 rounded-full bg-white mx-auto flex items-center justify-center shadow-lg">
            <Fingerprint size={42} className="text-blue-600" />
          </div>

          <h1 className="text-white text-3xl font-bold mt-5">
            SmartAttend Pro
          </h1>

          <p className="text-blue-100 mt-2">
            Employee Attendance Management System
          </p>

        </div>

        {/* Login Form */}
       <div className="p-6 sm:p-8">

          <form onSubmit={handleLogin} className="space-y-5">

            {/* Email */}
            <div className="relative">

              <Mail
                className="absolute left-4 top-4 text-gray-400"
                size={20}
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            {/* Password */}
            <div className="relative">

              <Lock
                className="absolute left-4 top-4 text-gray-400"
                size={20}
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-xl py-3 pl-12 pr-12 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-gray-500"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

            {/* Remember */}
            <div className="flex justify-between items-center text-sm">

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <a
                href="#"
                className="text-blue-600 hover:underline"
              >
                Forgot Password?
              </a>

            </div>

            {/* Login */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition duration-300"
            >
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center">

              <div className="flex-1 border-t"></div>

              <span className="mx-3 text-gray-500">
                OR
              </span>

              <div className="flex-1 border-t"></div>

            </div>

            {/* Fingerprint */}
            <button
              type="button"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl flex justify-center items-center gap-3 transition duration-300"
            >
              <Fingerprint size={22} />
              Login with Fingerprint
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}