// axios.js
import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "https://snap-sync-backend.vercel.app/api"
    : import.meta.env.VITE_API_URL; // use custom var if available

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
