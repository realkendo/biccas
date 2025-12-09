"use client";

import { Toaster } from "react-hot-toast";

export default function ToasterProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: "#363636",
          color: "#fff",
          borderRadius: "8px",
          padding: "12px 16px",
          fontSize: "14px",
        },
        success: {
          duration: 3000,
          style: {
            background: "#54BD95",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#54BD95",
          },
        },
        error: {
          duration: 4000,
          style: {
            background: "#ef4444",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#ef4444",
          },
        },
      }}
    />
  );
}

