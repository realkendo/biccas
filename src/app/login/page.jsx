"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { login } from "@/utils/auth";
import { toast } from "react-hot-toast";
import Header from "@/components/Header";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDemoUsers, setShowDemoUsers] = useState(false);
  const [demoUsers, setDemoUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  
  // New state for validations and toggle
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  
  const router = useRouter();

  const fetchDemoUsers = async () => {
    setLoadingUsers(true);
    try {
      const userIds = [1, 2, 3];
      const userPromises = userIds.map(id =>
        fetch(`https://api.escuelajs.co/api/v1/users/${id}`).then(res => res.json())
      );
      const users = await Promise.all(userPromises);
      

      
      setDemoUsers(users);
    } catch (error) {
      toast.error("Failed to load demo users", { position: "top-right" });
    } finally {
      setLoadingUsers(false);
    }
  };

  useEffect(() => {
    if (showDemoUsers && demoUsers.length === 0) {
      fetchDemoUsers();
    }
  }, [showDemoUsers]);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    setEmailError("");
    setPasswordError("");
    
    let isValid = true;
    
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }
    
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 4) {
      setPasswordError("Password must be at least 4 characters");
      isValid = false;
    }
    
    if (!isValid) return;

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

  const copyCredentials = (userEmail, userPassword) => {
    setEmail(userEmail);
    setPassword(userPassword);
    toast.success("Credentials filled in!", { position: "top-right" });
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
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError(""); // Clear error on change
                }}
                placeholder="Enter your email"
                className={`mt-1 w-full border rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#54BD95] ${
                  emailError ? "border-red-500" : "border-gray-200"
                }`}
                disabled={loading}
              />
              {emailError && (
                <p className="text-red-500 text-xs mt-1">{emailError}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (passwordError) setPasswordError(""); // Clear error on change
                  }}
                  placeholder="Enter your password"
                  className={`mt-1 w-full border rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#54BD95] pr-10 ${
                    passwordError ? "border-red-500" : "border-gray-200"
                  }`}
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              {passwordError && (
                <p className="text-red-500 text-xs mt-1">{passwordError}</p>
              )}
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

          {/* Demo Users Section */}
          <div className="mt-6">
            <button
              onClick={() => setShowDemoUsers(!showDemoUsers)}
              className="w-full text-sm text-[#54BD95] hover:text-[#45a882] font-medium flex items-center justify-center gap-2 py-2 border border-[#54BD95] rounded-lg hover:bg-[#E6F7F2] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              {showDemoUsers ? "Hide Demo Users" : "Show Demo Users"}
            </button>

            {showDemoUsers && (
              <div className="mt-4 space-y-3 max-h-96 overflow-y-auto">
                {loadingUsers ? (
                  <div className="text-center py-4 text-gray-600">Loading demo users...</div>
                ) : (
                  demoUsers.map((user) => (
                    <div
                      key={user.id}
                      className="border border-gray-200 rounded-lg p-4 hover:border-[#54BD95] transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{user.name}</p>
                          <p className="text-xs text-gray-500">{user.email}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => copyCredentials(user.email, user.password)}
                          className="flex-1 bg-[#54BD95] text-white text-sm px-3 py-2 rounded hover:bg-[#45a882] transition-colors"
                        >
                          Use Credentials
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Password: {user.password}
                      </p>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

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
