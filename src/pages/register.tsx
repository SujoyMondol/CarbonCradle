import { Geist, Geist_Mono } from "next/font/google";
import { Leaf } from "lucide-react";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Register() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950 flex flex-col items-center justify-center`}
    >
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <Leaf className="w-10 h-10 text-green-600 dark:text-green-400" />
          <span className="text-2xl font-bold ml-2">CarbonCradle</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-4">Create an Account</h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
          Join us in building a sustainable future.
        </p>

        {/* Form */}
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 dark:bg-gray-700"
              placeholder="John Doe"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 dark:bg-gray-700"
              placeholder="example@email.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 dark:bg-gray-700"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 dark:text-gray-300 mt-6">
          Already have an account? 
          <Link href="/login" className="text-green-600 hover:underline ml-1">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
