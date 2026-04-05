import axios from "axios";

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://bytebazaar-1-1v1r.onrender.com";

const API = axios.create({
    baseURL: API_BASE_URL,
});

// Add a request interceptor to include the token in all requests
API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default API;
