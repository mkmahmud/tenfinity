import Link from "next/link";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function SignUp() {
  return (
    <main className="bg-primary flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="bg-secondary p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Type Full Name"
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
            Sign Up
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <Link
              href="/auth/signin"
              className="text-border hover:underline font-medium"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
