"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { login } from "@/utils/auth";
import { toast } from "react-hot-toast";
import Header from "@/components/Header";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      toast.success("Logged in successfully", { position: "top-right" });
      // Redirect to the landing page (homepage) after successful login
      router.push("/");
    } catch (err) {
      const message =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        "Login failed. Please check your credentials.";
      toast.error(message, { position: "top-right" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#E6F7F2] to-white">
      <Header />
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)] px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-6 text-gray-950">
            Log in to your account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mt-1 w-full border rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#54BD95]"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="mt-1 w-full border rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#54BD95]"
                disabled={loading}
              />
            </div>

            <div className="flex items-center justify-center pt-2">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#54BD95] text-white px-6 py-2 rounded-lg hover:bg-[#45a882] disabled:opacity-60 transition-colors font-medium w-full"
              >
                {loading ? "Logging in..." : "Log In"}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-[#54BD95] hover:underline font-medium"
              >
                Sign Up
              </Link>
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <Link href="/" className="text-[#54BD95] hover:underline">
                ← Back to Home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
