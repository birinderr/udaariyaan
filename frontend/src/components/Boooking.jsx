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
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full mt-10">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-6 text-center">Book Your Trip</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            
            <label className="text-gray-700 mb-2">From</label>
            <select
              required
              onChange={(e) => handlechange(e)}
              name="from"
              id="from"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-300"
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
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-300"
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
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 mb-2">Guests</label>
            <select
              required
              name="guests"
              id="guests"
              onChange={(e) => handlechange(e)}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-300"
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
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-300"
            >
              <option>Select class</option>
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
            </select>
          </div>
          <div className="flex justify-center mt-4 md:col-span-2">
            <button
              onClick={(e) => handlebook(e)}
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              + Book
            </button>
          </div>
        </form>
        
      </div>
     
      <div className="mt-10 w-full max-w-6xl">
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
