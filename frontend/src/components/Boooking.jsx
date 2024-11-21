import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makebooking } from '../redux/action';
import Destinationdata from './destinationdata';
import Table from './table';
import Faqs from './Faqs';

const Boooking = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const size = data.length;
  const [bookingdata, setbookingdata] = useState({});
  const [countries, setCountries] = useState([]);

  const handlechange = (e) => {
    const newdata = { ...bookingdata };
    newdata[e.target.name] = e.target.value;
    setbookingdata(newdata);
  };

  const handlebook = (e) => {
    e.preventDefault();
    if (Object.keys(bookingdata).length === 5) {
      dispatch(makebooking({ ...bookingdata, id: size + 1 }));
    } else {
      alert('Please fill out all fields.');
    }
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const countryData = await response.json();
        setCountries(countryData);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };
    fetchCountries();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className='flex flex-col bg-blue-100 w-full justify-center items-center'>
      
      
      <h2 className="text-black-800 text-3xl font-extrabold text-center md:text-5xl">Book Your Flight</h2>
      <p className="mt-2 text-lg text-gray-500 md:text-xl">
        Your next great trip starts here! Let's get you on your way to an unforgettable journey.
      </p>
        <div className=" bg-white border-4 border-gray-200 shadow-xl rounded-3xl p-8 z-10 max-w-4xl w-full mt-10">
          <form onSubmit={handlebook} className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-gray-700 mb-2">From</label>
              <select
                required
                onChange={(e) => handlechange(e)}
                name="from"
                id="from"
                className="p-3 border-2 border-gray-200 rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option>Select country</option>
                {countries.map((country) => (
                  <option key={country.cca3} value={country.name.common}>
                    {country.name.common}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 mb-2">To</label>
              <select
                required
                onChange={(e) => handlechange(e)}
                name="to"
                id="to"
                className="p-3 border-2 border-gray-200 rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option>Select country</option>
                {countries.map((country) => (
                  <option key={country.cca3} value={country.name.common}>
                    {country.name.common}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 mb-2">Journey Date</label>
              <input
                required
                type="date"
                name="date"
                onChange={(e) => handlechange(e)}
                className="p-3 border-2 border-gray-200 rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 mb-2">Guests</label>
              <select
                required
                name="guests"
                id="guests"
                onChange={(e) => handlechange(e)}
                className="p-3 border-2 border-gray-200 rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option>Select number of guests</option>
                <option value="1">1 person</option>
                <option value="2">2 persons</option>
                <option value="3">3 persons</option>
                <option value="4">4 persons</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 mb-2">Travel Class</label>
              <select
                required
                name="ticketclassname"
                id="ticketclassname"
                onChange={(e) => handlechange(e)}
                className="p-3 border-2 border-gray-200 rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option>Select class</option>
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
              </select>
            </div>
            <div className="flex justify-center mt-4 md:col-span-2">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
              >
                + Book
              </button>
            </div>
          </form>
        </div>
        <svg
          className="absolute inset-x-0 bottom-0 z-0"
          style={{ height: '500px', width: '3000px' }} 
          viewBox="100 10 1440 170"
          xmlns="http://www.w3.org/2000/svg"
        >
        <path
          fill="white"
          fillOpacity="1"
          d="M0,64L48,69.3C96,75,192,85,288,85.3C384,85,480,75,576,80C672,85,768,107,864,112C960,117,1056,107,1152,96C1248,85,1344,75,1392,69.3L1440,64L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
        >
        </path>
        </svg>
      </div>

      <div className="mt-10 w-full max-w-6xl z-10">
        <Table />
      </div>

      <div className="mt-10 w-full max-w-6xl">
        <Destinationdata />
      </div>

      <div className="mt-10 w-full max-w-6xl">
        <Faqs />
      </div>
    </div>
  );
};

export default Boooking;
