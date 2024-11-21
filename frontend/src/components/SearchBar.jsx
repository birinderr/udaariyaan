import React from 'react';

const SearchBar = ({ filters = {}, onFilterChange }) => {
  const { location = "", checkInDate = "", checkOutDate = "", priceRange = "" } = filters;

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className="bg-white shadow-xl rounded-3xl p-8 md:p-12 mx-6 md:mx-12 mt-8 border-4 border-gray-300">
      <div className="flex flex-col gap-6">
        {/* Inputs in Row */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          {/* Location */}
          <input
            type="text"
            name="location"
            value={location}
            onChange={handleFilterChange}
            placeholder="Enter location"
            className="w-full sm:w-1/4 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Price Range */}
          <input
            type="text"
            name="priceRange"
            value={priceRange}
            onChange={handleFilterChange}
            placeholder="Price range"
            className="w-full sm:w-1/4 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Check-in Date */}
          <input
            type="date"
            name="checkInDate"
            value={checkInDate}
            onChange={handleFilterChange}
            className="w-full sm:w-1/4 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Check-out Date */}
          <input
            type="date"
            name="checkOutDate"
            value={checkOutDate}
            onChange={handleFilterChange}
            className="w-full sm:w-1/4 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Search Button Below */}
        <div className="flex items-center justify-center mt-4">
          <button
            onClick={() => onFilterChange(filters)}
            className="w-full bg-blue-500 text-white p-4 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
