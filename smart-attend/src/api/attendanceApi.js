import axios from "axios";

const AttendanceAPI = axios.create({
  baseURL: "http://localhost:5000/api/attendance",
});

AttendanceAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default AttendanceAPI;