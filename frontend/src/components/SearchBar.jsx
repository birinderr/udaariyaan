import React from 'react';

const SearchBar = ({ setFilters }) => {

  return (
    <div className="m-4 max-w-5xl">
      <div className="rounded-3xl border-4 border-gray-200 bg-white p-8 shadow-xl text-center">
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          
          <div className="flex flex-col">
            <label htmlFor="location" className="text-stone-600 text-sm font-medium">Location</label>
            <input
              type="text"
              list="locationSuggestions"
              id="location"
              placeholder="Enter a location"
              className="mt-2 block w-full rounded-md border-2 border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
            <datalist id="locationSuggestions">
              <option value="New Delhi" />
              <option value="Mumbai" />
              <option value="Bangalore" />
              <option value="Goa" />
              <option value="Jaipur" />
            </datalist>
          </div>

          <div className="flex flex-col">
            <label htmlFor="guests" className="text-stone-600 text-sm font-medium">Guests</label>
            <input
              type="number"
              id="guests"
              placeholder="2"
              className="mt-2 block w-full rounded-md border-2 border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="date" className="text-stone-600 text-sm font-medium">Check In</label>
            <input
              type="date"
              id="date"
              className="mt-2 block w-full rounded-md border-2 border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="date" className="text-stone-600 text-sm font-medium">Check Out</label>
            <input
              type="date"
              id="date"
              className="mt-2 block w-full rounded-md border-2 border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
        </div>

        <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex md:justify-center">
          <button className="active:scale-95 rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-600 outline-none focus:ring hover:opacity-90">
            Reset
          </button>
          <button className="active:scale-95 rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
