import axios from "axios";

const ReportAPI = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default ReportAPI;