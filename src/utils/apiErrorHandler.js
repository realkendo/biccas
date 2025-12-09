"use client";
import { toast } from "react-hot-toast";

/**
 * Handle API errors with toast notifications
 * @param {Error} error - The error object from axios
 * @param {Object} options - Additional options
 * @param {string} options.customMessage - Custom error message to display
 * @param {boolean} options.redirectOn401 - Whether to redirect on 401 (default: true)
 * @param {string} options.redirectPath - Custom redirect path (default: '/login')
 */
export const handleApiError = (error, options = {}) => {
  const {
    customMessage,
    redirectOn401 = true,
    redirectPath = "/login",
  } = options;

  if (error.response?.status === 401) {
    // Clear auth data
    if (typeof window !== "undefined") {
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      localStorage.removeItem("refreshToken");

      const message =
        customMessage || "Your session has expired. Please log in again.";
      toast.error(message, {
        duration: 4000,
        position: "top-right",
      });

      // Redirect to login if enabled
      if (redirectOn401) {
        window.location.href = redirectPath;
      }
    }
  } else if (error.response) {
    // Handle other API errors
    const errorMessage =
      customMessage ||
      error.response.data?.msg ||
      error.response.data?.message ||
      error.response.data?.error ||
      "An error occurred. Please try again.";

    toast.error(errorMessage, {
      duration: 4000,
      position: "top-right",
    });
  } else if (error.request) {
    // Network error
    toast.error("Network error. Please check your connection.", {
      duration: 4000,
      position: "top-right",
    });
  } else {
    // Something else happened
    toast.error(customMessage || "An unexpected error occurred.", {
      duration: 4000,
      position: "top-right",
    });
  }
};

export const getAgentBonuses = async (pageNumber = 1) => {
  try {
    const api = (await import("./api")).default;
    const response = await api.get(`/partner/bonuses?pageNumber=${pageNumber}`);
    return response.data;
  } catch (error) {
    // Error is already handled by interceptor
    throw error;
  }
};
