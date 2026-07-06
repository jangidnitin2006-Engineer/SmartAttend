import axios from "axios";

const ReportAPI = axios.create({
  baseURL: "http://localhost:5000/api",
});

export default ReportAPI;