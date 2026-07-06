import axios from "axios";

const API = axios.create({
  baseURL: "https://smartattend-1-0a3x.onrender.com/api",
});

// Automatically attach JWT to every request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;