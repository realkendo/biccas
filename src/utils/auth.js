import axios from "axios";
import api from "./api";

const AUTH_BASE = "/api/proxy/auth";

export const login = async (email, password) => {
  const res = await axios.post(`${AUTH_BASE}/login`, { email, password });

  // Response includes access_token and refresh_token
  const access = res.data?.access_token || res.data?.accessToken;
  const refresh = res.data?.refresh_token || res.data?.refreshToken;

  if (access) {
    localStorage.setItem("authToken", access);
  }
  if (refresh) {
    localStorage.setItem("refreshToken", refresh);
  }

  // Notify other parts of the app that auth changed immediately (tokens available)
  try {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("authChanged", { detail: { user: null } })
      );
    }
  } catch (e) {}

  // Optionally fetch profile immediately and update stored user
  try {
    const profile = await getProfile();
    if (profile?.data) {
      localStorage.setItem("user", JSON.stringify(profile.data));
      try {
        if (typeof window !== "undefined") {
          window.dispatchEvent(
            new CustomEvent("authChanged", { detail: { user: profile.data } })
          );
        }
      } catch (e) {}
    }
  } catch (e) {
    // ignore profile fetch errors — tokens are still valid
  }

  return res.data;
};

export const getProfile = async () => {
  // Use our api instance so Authorization header is applied
  try {
    return await api.get("/auth/profile");
  } catch (err) {
    throw err;
  }
};

export const logout = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("user");
  try {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("authChanged", { detail: { user: null } })
      );
    }
  } catch (e) {}
};

export default {
  login,
  getProfile,
  logout,
};
