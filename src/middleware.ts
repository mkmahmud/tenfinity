import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAuth } from "./utills/cookieManager";

const protectedPaths = ["/dashboard", "/profile"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isProtected = protectedPaths.some((path) => pathname.startsWith(path));

  const isLoggedIn = getAuth(req); // ✅ works server-side now

  if (isProtected && !isLoggedIn) {
    const loginUrl = new URL("/auth/signin", req.url);
    loginUrl.searchParams.set("callbackUrl", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
