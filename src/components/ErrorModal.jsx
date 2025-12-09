"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function ErrorModal({ error, onClose }) {
  const router = useRouter();

  const handleOk = () => {
    // Clear any persisted error state and redirect to home
    try {
      // Clear localStorage stored user/errors if any
      localStorage.removeItem("errorBoundary");
      localStorage.removeItem("authToken");
      localStorage.removeItem("refreshToken");
    } catch (e) {
      // ignore
    }
    // clear console to remove runtime errors from DevTools (not Problems tab)
    if (typeof console !== "undefined" && console.clear) console.clear();
    if (onClose) onClose();
    router.push("/");
  };

  // Check if this is a 404/Page Not Found error
  const isNotFound =
    error?.message?.includes("404") ||
    error?.message?.includes("Page Not Found") ||
    error?.message?.includes("not found");

  const title = isNotFound ? "Page Not Found" : "An error occurred";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={handleOk} />
      <div className="relative bg-white rounded-lg max-w-lg w-full p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        <div className="max-h-56 overflow-auto text-sm text-gray-700 whitespace-pre-wrap">
          {error?.message || String(error) || "Unknown error"}
          {error?.stack && !isNotFound && (
            <pre className="mt-3 bg-gray-100 p-3 rounded text-xs text-gray-600">
              {error.stack}
            </pre>
          )}
          {error?.stack && isNotFound && (
            <p className="mt-3 text-sm text-gray-600">{error.stack}</p>
          )}
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleOk}
            className="px-4 py-2 bg-[#54BD95] text-white rounded hover:bg-[#45a882] transition-colors"
          >
            {isNotFound ? "Go to Home" : "OK"}
          </button>
        </div>
      </div>
    </div>
  );
}
