import axios from "axios";

// Use the provided Render backend URL. Ensure this is also set in your deployment platform's environment variables.
const API = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "https://bytebazaar-1-1v1r.onrender.com",
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
