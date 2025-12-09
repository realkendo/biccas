"use client";

import React, { Component, useState } from "react";
import ErrorModal from "./ErrorModal";

class ErrorBoundaryClass extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Persist last error so the modal can show it after hydration if needed
    try {
      localStorage.setItem(
        "errorBoundary",
        JSON.stringify({ message: error.message, stack: error.stack })
      );
    } catch (e) {
      // ignore
    }
    // Still log for debugging
    console.error("Uncaught error:", error, info);
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      // Render nothing server-side; the client wrapper will show modal
      return null;
    }
    return this.props.children;
  }
}

export default function ErrorBoundary({ children }) {
  const [clientError, setClientError] = useState(null);

  // On mount, read any persisted error (from componentDidCatch)
  React.useEffect(() => {
    try {
      const raw = localStorage.getItem("errorBoundary");
      if (raw) {
        const parsed = JSON.parse(raw);
        setClientError(parsed);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const handleClose = () => {
    try {
      localStorage.removeItem("errorBoundary");
    } catch (e) {}
    setClientError(null);
    // clear console
    if (typeof console !== "undefined" && console.clear) console.clear();
  };

  return (
    <>
      <ErrorBoundaryClass>{children}</ErrorBoundaryClass>
      {clientError && <ErrorModal error={clientError} onClose={handleClose} />}
    </>
  );
}
