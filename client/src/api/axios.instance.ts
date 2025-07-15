import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5800",
  withCredentials: true,
});

export default axiosInstance;
