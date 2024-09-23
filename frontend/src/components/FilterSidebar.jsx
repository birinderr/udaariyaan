// FilterSidebar.js
import React, { useState } from 'react';

const FilterSidebar = ({ setFilters }) => {
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [starRating, setStarRating] = useState(0, 5);

  const handleApplyFilters = () => {
    setFilters({ priceRange, starRating });
  };

  return (
    <div className="filter-sidebar">
      <h4>Filter By</h4>
      <div>
        <label>Price Range: </label>
        <input
          type="range"
          min="0"
          max="10000"
          value={priceRange}
          onChange={(e) => setPriceRange([0, e.target.value])}
        />
        <span>{priceRange[1]}</span>
      </div>
      <div>
        <label>Star Rating: </label>
        <input
          type="number"
          value={starRating}
          onChange={(e) => setStarRating(e.target.value)}
        />
      </div>
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default FilterSidebar;
