import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PopularHotels = ({ filters }) => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const query = new URLSearchParams(
          Object.entries(filters).reduce((acc, [key, value]) => {
            if (value) acc[key] = value;
            return acc;
          }, {})
        ).toString();
    
        const response = await axios.get(`http://localhost:3000/api/hotels?${query}`);
        if (Array.isArray(response.data)) {
          setHotels(response.data);
        } else {
          console.error("Unexpected response:", response.data);
          setHotels([]);
        }
      } catch (error) {
        console.error("Error fetching hotels:", error);
        setHotels([]);
      }
    };
    
    

    fetchHotels();
  }, [filters]); // Re-fetching when filters change

  return (
    <div>
      <section className="py-20">
        <h1 className="mb-12 text-center font-sans text-5xl font-bold text-gray-900">Popular Hotels</h1>
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(hotels) && hotels.length > 0 ? (
            hotels.map((hotel) => (
              <article key={hotel._id} className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
                <a href="#">
                  <div className="relative flex items-end overflow-hidden rounded-xl">
                    <img
                      src={hotel.imageUrl || 'https://via.placeholder.com/640x360'}
                      alt="Hotel Photo"
                      className="transform transition-transform duration-300 ease-in-out hover:scale-110 hover:translate-y-2"
                    />
                    <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md opacity-90 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-slate-400 ml-1 text-sm">{hotel.rating || '4.9'}</span>
                    </div>
                  </div>

                  <div className="mt-1 p-2">
                    <h2 className="text-slate-700">{hotel.name}</h2>
                    <p className="text-slate-400 mt-1 text-sm">{hotel.location}</p>

                    <div className="mt-3 flex items-end justify-between">
                      <p>
                        <span className="text-lg font-bold text-blue-500">${hotel.pricePerNight}</span>
                        <span className="text-slate-400 text-sm">/night</span>
                      </p>

                      <div className="group inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="group-hover:text-blue-500 h-4 w-4 text-blue-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                        <path
                          fillRule="evenodd"
                          d="M12 4a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H5a1 1 0 110-2h6V5a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </article>
            ))
          ) : (
            <p>No hotels found based on the current filters.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default PopularHotels;
