import React, { useEffect, useState } from "react";
import useAdminStore from "../store/useAdminStore";
import Modal from "../components/ui/Modal";

export default function Admin() {
  const { testimonies, loading, error, fetchTestimonies, getTestimonyById } =
    useAdminStore();
  const [selectedTestimonyId, setSelectedTestimonyId] = useState(null);

  useEffect(() => {
    fetchTestimonies();
  }, [fetchTestimonies]);

  const handleTestimonyClick = (id) => {
    getTestimonyById(id);
    setSelectedTestimonyId(id);
  };

  const handleCloseModal = () => {
    setSelectedTestimonyId(null);
  };

  if (loading) {
    return <div>Loading testimonies...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard - Testimonies</h2>
      <ul>
        {testimonies.map((testimony) => (
          <li
            key={testimony._id}
            className="bg-gray-100 p-3 rounded-md mb-2 cursor-pointer hover:bg-gray-200"
            onClick={() => handleTestimonyClick(testimony._id)}
          >
            <p className="font-semibold">{testimony.name}</p>
            <p className="text-gray-600">
              {testimony.testimony.substring(0, 50)}...
            </p>
          </li>
        ))}
      </ul>

      {selectedTestimonyId && <Modal onClose={handleCloseModal} />}
    </div>
  );
}
