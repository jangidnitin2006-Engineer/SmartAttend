import axios from "axios";

const LeaveAPI = axios.create({
  baseURL: "http://localhost:5000/api/leave",
});

LeaveAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default LeaveAPI;