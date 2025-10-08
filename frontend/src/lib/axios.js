// axios.js
import axios from "axios";

// const BASE_URL =
//   import.meta.env.MODE === "development"
//     ? "https://snap-sync-backend.vercel.app/api"
//     : import.meta.env.VITE_API_URL;
const BASE_URL =
  import.meta.env.MODE === "development"
    ? // ? "http://localhost:5000/api" // local backend for dev
      "https://snap-sync-backend.vercel.app/api" // local backend for dev
    : import.meta.env.VITE_API_URL ||
      "https://snap-sync-backend.vercel.app/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
