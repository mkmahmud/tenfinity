"use client";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { clearAuthData } from "@/utills/cookieManager";

export default function Navbar() {
  const { data: session } = useSession();

  const handleSignOut = () => {
    signOut({ callbackUrl: "/auth/signin" });
    clearAuthData();
  };

  return (
    <nav className="w-full bg-white shadow flex items-center justify-between px-8 py-4">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={32}
          height={32}
          className="h-8 w-8"
        />
        <span className="text-xl font-bold text-gray-800">MyApp</span>
      </div>
      {/* Nav Links */}
      <div className="flex space-x-6">
        <Link
          href="/"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          About
        </Link>
        <Link
          href="/dashboard"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Dashboard
        </Link>
        <Link
          href="/services"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Services
        </Link>
        <Link
          href="/contact"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Contact
        </Link>
      </div>
      {/* Profile & Auth Buttons */}
      <div className="flex items-center space-x-4">
        <button className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1">
          <Image
            src="/images/profile.png"
            alt="Profile"
            className="h-6 w-6 rounded-full mr-2"
            height={24}
            width={24}
          />
          <span className="text-gray-700">Profile</span>
        </button>

        {!session?.user && (
          <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
            <Link href="/auth/signin">Log In</Link>
          </button>
        )}

        {session?.user && (
          <button
            onClick={handleSignOut}
            className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
          >
            Log Out
          </button>
        )}
        <button className="bg-gray-200 text-gray-700 px-4 py-1 rounded hover:bg-gray-300">
          <Link href="/auth">Sign Up</Link>
        </button>
      </div>
    </nav>
  );
}
