import React from 'react';
import SearchBar from '../components/SearchBar';
import Faqs from '../components/Faqs';
import FilterSidebar from '../components/FilterSidebar';
import PopularHotels from '../components/PopularHotels';
import PopularDestinations from '../components/PopularDestinations';

const Hotel = () => {
  return (
    <div>
      <div className="relative text-center bg-blue-100 py-8 z-10">
        <h2 className="text-black-800 text-3xl font-extrabold md:text-5xl">Book Hotels and Homestays</h2>
        <p className="mt-2 text-lg text-gray-500 md:text-xl">Find the best places to stay, with filters to refine your search</p>
        <div className="flex justify-center relative z-10">
          <SearchBar />
        </div>
        {/* SVG for curved bottom */}
        <svg className="absolute inset-x-0 bottom-0 z-0" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="white" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,170.7C384,160,480,160,576,170.7C672,181,768,203,864,213.3C960,224,1056,224,1152,213.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <PopularDestinations/>
      <PopularHotels/>
      <Faqs/>
    </div>
  )
}

export default Hotel;
