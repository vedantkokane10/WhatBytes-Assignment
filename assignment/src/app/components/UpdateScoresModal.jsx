import React, { useState } from 'react';

function UpdateScoresModal({ isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState({
    rank: 0,
    percentile: 0,
    score: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-80 shadow-lg relative">
        <h2 className="text-2xl font-bold mb-4">Update Scores</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold">Update your Rank</label>
            <input
              type="number"
              name="rank"
              value={formData.rank}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              placeholder="Enter rank"
            />
          </div>
          <div>
            <label className="block font-semibold">Update your Percentile</label>
            <input
              type="number"
              name="percentile"
              value={formData.percentile}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              placeholder="Enter percentile"
            />
          </div>
          <div>
            <label className="block font-semibold">Update your Current Score</label>
            <input
              type="number"
              name="score"
              value={formData.score}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              placeholder="Enter score"
            />
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateScoresModal;
