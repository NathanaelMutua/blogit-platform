import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://blogit-platform.onrender.com",
  withCredentials: true,
});

export default axiosInstance;
