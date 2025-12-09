"use client";

import { useEffect } from "react";
import ErrorModal from "@/components/ErrorModal";
import Header from "@/components/Header";

export default function NotFound() {
  useEffect(() => {
    // Store the not-found error in localStorage so ErrorModal can display it
    // This ensures consistency with the error boundary behavior
    try {
      const errorData = {
        message: "404 - Page Not Found",
        stack:
          "The page you are looking for does not exist or has been moved. Please check the URL and try again.",
      };
      localStorage.setItem("errorBoundary", JSON.stringify(errorData));
    } catch (e) {
      // ignore
    }
  }, []);

  const handleClose = () => {
    try {
      localStorage.removeItem("errorBoundary");
    } catch (e) {
      // ignore
    }
  };

  const notFoundError = {
    message: "404 - Page Not Found",
    stack:
      "The page you are looking for does not exist or has been moved. Please check the URL and try again.",
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#E6F7F2] to-white">
      <Header />
      <ErrorModal error={notFoundError} onClose={handleClose} />
    </div>
  );
}
