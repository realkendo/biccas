import axios from "axios";
import { toast } from "react-hot-toast";

// Create axios instance
const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    "/api/proxy",
  timeout: 30000,
});

// Helpers for refresh handling
const AUTH_REFRESH_URL = "/api/proxy/auth/refresh-token";
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(token);
  });
  failedQueue = [];
};

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("authToken");
      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle token refresh and errors globally
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If 401 and we haven't already retried this request, try refresh
    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry &&
      originalRequest.url !== AUTH_REFRESH_URL
    ) {
      originalRequest._retry = true;

      if (typeof window === "undefined") {
        return Promise.reject(error);
      }

      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) {
        // No refresh token available — clear and redirect
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        localStorage.removeItem("refreshToken");
        toast.error("Your session has expired. Please log in again.", {
          duration: 4000,
          position: "top-right",
        });
        window.location.href = "/login";
        return Promise.reject(error);
      }

      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return api(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      isRefreshing = true;

      try {
        // Refresh token request - most APIs use refresh_token field
        const refreshRes = await axios.post(AUTH_REFRESH_URL, {
          refreshToken: refreshToken,
        });

        const newAccess =
          refreshRes.data?.access_token || refreshRes.data?.accessToken;
        const newRefresh =
          refreshRes.data?.refresh_token || refreshRes.data?.refreshToken;

        if (newAccess) {
          localStorage.setItem("authToken", newAccess);
          if (newRefresh) localStorage.setItem("refreshToken", newRefresh);
          api.defaults.headers.common["Authorization"] = `Bearer ${newAccess}`;
          processQueue(null, newAccess);
          return api(originalRequest);
        }

        // If refresh didn't return tokens, fallthrough to clearing session
        processQueue(new Error("Failed to refresh token"), null);
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        localStorage.removeItem("refreshToken");
        toast.error("Your session has expired. Please log in again.", {
          duration: 4000,
          position: "top-right",
        });
        window.location.href = "/login";
        return Promise.reject(error);
      } catch (err) {
        processQueue(err, null);
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        localStorage.removeItem("refreshToken");
        toast.error("Your session has expired. Please log in again.", {
          duration: 4000,
          position: "top-right",
        });
        window.location.href = "/login";
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    // Other errors: show toast
    if (error.response) {
      const errorMessage =
        error.response.data?.msg ||
        error.response.data?.message ||
        error.response.data?.error ||
        "An error occurred. Please try again.";

      toast.error(errorMessage, {
        duration: 4000,
        position: "top-right",
      });
    } else if (error.request) {
      toast.error("Network error. Please check your connection.", {
        duration: 4000,
        position: "top-right",
      });
    } else {
      toast.error("An unexpected error occurred.", {
        duration: 4000,
        position: "top-right",
      });
    }

    return Promise.reject(error);
  }
);

export default api;
