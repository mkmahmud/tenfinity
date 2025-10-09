"use client";
import Link from "next/link";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function SignIn() {
  //
  const { data: session } = useSession();
  if (session?.user) {
    redirect("/");
  }

  // Handle google sign-in
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/" });
  };
  
  return (
    <main className="bg-primary flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="bg-secondary p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Sign In</h1>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-500" />
              <span className="text-sm">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center mt-10">or continue with</p>

        <div className="mt-6 flex  space-x-3 justify-between">
          <button
            onClick={handleGoogleSignIn}
            className="w-full  flex items-center justify-center gap-2 border rounded py-2 hover:bg-gray-100 transition"
          >
            <FaGoogle className="text-red-600" size={20} />
            Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 border rounded py-2 hover:bg-gray-100 transition">
            <FaFacebook className="text-blue-600" size={20} />
            Facebook
          </button>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/signup"
              className="text-border hover:underline font-medium"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
