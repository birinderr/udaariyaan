import React, { useState, useEffect } from "react";
import axios from "axios";

const Booking = () => {
  const [searchData, setSearchData] = useState({
    departureCity: "",
    ArrivalCity: "",
    departuredate: "",
  });

  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAllFlights = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3000/flight");
        setFlights(response.data.data);
      } catch (err) {
        setError("Unable to fetch flight data.");
      } finally {
        setLoading(false);
      }
    };
    fetchAllFlights();
  }, []);
  useEffect(() => {
    const handleSearch = async () => {
    setLoading(true);
      setError("");

     try {
       const query = new URLSearchParams(searchData).toString();
       const response = await axios.get(`http://localhost:3000/flight?${query}`);
       setFlights(response.data.data);
     } catch (err) {
       setError("Unable to fetch flights based on your search criteria.");
     } finally {
       setLoading(false);
     }
   };
   handleSearch();
  }, [searchData]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex flex-col items-center py-16">
      {/* Header Section */}
      <div className="text-center px-6 mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 drop-shadow-lg">
          Find Your Perfect Flight
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-xl mx-auto">
          Discover flights that match your schedule and budget.
        </p>
      </div>

      {/* Search Form */}
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl mb-16">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              name="departureCity"
              value={searchData.departureCity}
              onChange={handleChange}
              placeholder="Enter Departure City"
              className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md placeholder-gray-500"
            />
          </div>
          <div>
            <input
              type="text"
              name="ArrivalCity"
              value={searchData.ArrivalCity}
              onChange={handleChange}
              placeholder="Enter Arrival City"
              className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md placeholder-gray-500"
            />
          </div>
          <div className="md:col-span-2">
            <input
              type="date"
              name="departuredate"
              value={searchData.departuredate}
              onChange={handleChange}
              className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md placeholder-gray-500"
            />
          </div>
          <div className="md:col-span-2 text-center">
            <button
              type="button"
              className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-indigo-700 transition-transform transform hover:scale-105"
            >
              Search Flights
            </button>
          </div>
        </form>
      </div>

      {/* Error Message */}
      {error && (
        <div className="w-full max-w-lg bg-red-100 border-l-8 border-red-600 text-red-700 p-6 rounded-lg shadow-lg mb-6">
          <p className="text-center text-lg font-semibold">{error}</p>
        </div>
      )}

      {/* Flight Listings */}
      <div className="w-full max-w-6xl px-4">
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.isArray(flights) && flights.length > 0 ? (
              flights.map((flight, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
                >
                  <img
                    src={flight.imageUrl}
                    alt={flight.Flightname}
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-blue-700">
                      {flight.Flightname}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      <span className="font-medium">From:</span>{" "}
                      {flight.departureCity}
                    </p>
                    <p className="mt-1 text-gray-600">
                      <span className="font-medium">To:</span>{" "}
                      {flight.ArrivalCity}
                    </p>
                    <p className="mt-1 text-gray-600">
                      <span className="font-medium">Departure:</span>{" "}
                      {new Date(flight.departuredate).toLocaleDateString()}
                    </p>
                    <p className="mt-1 text-gray-600">
                      <span className="font-medium">Arrival Time:</span>{" "}
                      {flight.ArrivalTime}
                    </p>
                    <p className="mt-4 text-xl text-blue-600 font-bold">
                      ${flight.price}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                No flights found.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
