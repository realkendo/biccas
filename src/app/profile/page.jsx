"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getProfile, logout } from "@/utils/auth";
import { toast } from "react-hot-toast";
import Header from "@/components/Header";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        // Always fetch fresh profile data from API
        const res = await getProfile();
        if (res?.data) {
          setUser(res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
          // Notify other components
          if (typeof window !== "undefined") {
            window.dispatchEvent(
              new CustomEvent("authChanged", { detail: { user: res.data } })
            );
          }
        } else {
          // Fallback to localStorage if API doesn't return data
          const stored =
            typeof window !== "undefined" ? localStorage.getItem("user") : null;
          if (stored) {
            setUser(JSON.parse(stored));
          }
        }
      } catch (err) {
        // Try localStorage as fallback
        const stored =
          typeof window !== "undefined" ? localStorage.getItem("user") : null;
        if (stored) {
          setUser(JSON.parse(stored));
        } else {
          toast.error("Could not load profile. Please log in.", {
            position: "top-right",
          });
          router.push("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [router]);

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully", { position: "top-right" });
    router.push("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-b from-[#E6F7F2] to-white">
        <Header />
        <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="text-lg text-gray-600">Loading profile...</div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-linear-to-b from-[#E6F7F2] to-white">
        <Header />
        <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="text-lg text-gray-600">No profile available.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-[#E6F7F2] to-white">
      <Header />
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)] px-4 py-8">
        <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-6 text-gray-950">Profile</h2>
          <div className="space-y-4">
            {user.avatar && (
              <div className="flex justify-center mb-4">
                <img
                  src={user.avatar}
                  alt={user.name || user.email}
                  className="w-24 h-24 rounded-full object-cover border-2 border-[#54BD95]"
                />
              </div>
            )}
            <div className="space-y-3">
              <div className="border-b pb-2">
                <div className="text-sm text-gray-500 mb-1">Name</div>
                <div className="text-lg font-medium text-gray-900">
                  {user.name || user.username || user.email || "N/A"}
                </div>
              </div>
              <div className="border-b pb-2">
                <div className="text-sm text-gray-500 mb-1">Email</div>
                <div className="text-lg font-medium text-gray-900">
                  {user.email || "N/A"}
                </div>
              </div>
              {user.role && (
                <div className="border-b pb-2">
                  <div className="text-sm text-gray-500 mb-1">Role</div>
                  <div className="text-lg font-medium text-gray-900">
                    {user.role}
                  </div>
                </div>
              )}
              {user.id && (
                <div className="border-b pb-2">
                  <div className="text-sm text-gray-500 mb-1">User ID</div>
                  <div className="text-lg font-medium text-gray-900">
                    {user.id}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium flex-1"
            >
              Log out
            </button>
            <button
              onClick={() => router.push("/")}
              className="px-6 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors font-medium flex-1"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
