// axios.js
import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:8001/api"
    : import.meta.env.VITE_API_URL || "/api"; // use custom var if available

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
