import { useState } from "react";
import { useRouter } from "next/router";
import { Leaf } from "lucide-react";
import Link from "next/link";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      alert("Login successful! Redirecting...");
      router.push("/dashboard"); // Change to the desired page after login
    } catch (err: Error | unknown) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        {/* Logo & Title */}
        <div className="flex items-center justify-center mb-6">
          <Leaf className="w-10 h-10 text-green-600 dark:text-green-400" />
          <span className="text-2xl font-bold ml-2 text-gray-900 dark:text-gray-200">CarbonCradle</span>
        </div>

        <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-200">Log In</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
          />
          <Link href='/dashboard'>
          <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition">
            Log In
          </button>
          </Link>
        </form>

        {/* Register Link */}
        <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-green-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
