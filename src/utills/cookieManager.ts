import Cookies from "js-cookie";
import type { NextRequest } from "next/server";
// Clear all authentication-related data from localStorage and cookies
export const clearAuthData = (): void => {
  try {
    // Clear localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");

    // Clear cookies
    Cookies.remove("next-auth.callback-url", { path: "/" });
    Cookies.remove("next-auth.csrf-token", { path: "/" });
    Cookies.remove("next-auth.session-token", { path: "/" });
    Cookies.remove("token", { path: "/" });
  } catch (error) {
    console.error("Error clearing auth data:", error);
  }
};


// Get cookies if user logged in 

export const getAuth = (req?: NextRequest): boolean => {
  // 🔹 When called from middleware
  if (req) {
    const session =
      req.cookies.get("next-auth.session-token") ||
      req.cookies.get("__Secure-next-auth.session-token");
    return !!session;
  }

  // 🔹 When called from client-side
  if (typeof window !== "undefined") {
    const token =
      Cookies.get("next-auth.session-token") ||
      Cookies.get("__Secure-next-auth.session-token");
    return !!token;
  }

  return false;
};