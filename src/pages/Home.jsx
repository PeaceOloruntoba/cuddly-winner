import React, { useState } from "react";
import useAdminStore from "../store/useAdminStore";
import { toast } from "sonner";

export default function Home() {
  const [name, setName] = useState("");
  const [testimony, setTestimony] = useState("");
  const { submitTestimony, loading, error } = useAdminStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitTestimony(name, testimony);
      toast.success("Testimony submitted successfully!");
      setName("");
      setTestimony("");
    } catch (err) {
      toast.error(error || "Failed to submit testimony.");
    }
  };

  return (
    <div className="h-full bg-gradient-to-br from-blue-300 to-indigo-400 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Share Your Testimony
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name (Optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="testimony"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Your Testimony
            </label>
            <textarea
              id="testimony"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
              placeholder="Share your experience here..."
              value={testimony}
              onChange={(e) => setTestimony(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ${
                loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              }`}
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Testimony"}
            </button>
            {error && (
              <p className="text-red-500 text-xs italic mt-2">{error}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
