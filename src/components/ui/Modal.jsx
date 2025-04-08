import React from "react";
import useAdminStore from "../../store/useAdminStore";

export default function Modal({ onClose }) {
  const singleTestimony = useAdminStore((state) => state.singleTestimony);

  if (!singleTestimony) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-md shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Testimony Details</h2>
        <p className="mb-2">
          <span className="font-bold">Name:</span> {singleTestimony.name}
        </p>
        <p className="mb-4">
          <span className="font-bold">Testimony:</span>
          <br />
          {singleTestimony.testimony}
        </p>
        <div className="flex justify-end">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
