import React, { useState } from "react";
import useAdminStore from "../store/useAdminStore";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginAdmin, loading, error } = useAdminStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await loginAdmin(email, password);
    if (success) {
      toast.success("Login successful!");
      navigate("/admin");
    } else if (error) {
      toast.error(error);
    } else {
      toast.error("Login failed.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className={`bg-red-900 hover:bg-red-800 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline ${
                loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              }`}
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
