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

    // Fetch all flights on page load
    useEffect(() => {
      const fetchAllFlights = async () => {
        setLoading(true);
        try {
          const response = await axios.get("http://localhost:3000/flight");
          setFlights(response.data.data); // Update state with all flights
        } catch (err) {
          setError("Unable to fetch flight data.");
        } finally {
          setLoading(false);
        }
      };

      fetchAllFlights();
    }, []);

    // Handle search
    useEffect(()=>{
    const handleSearch = async () => {

      setLoading(true);
      setError("");

      try {
        
        const query = new URLSearchParams(searchData).toString();
        const response = await axios.get(`http://localhost:3000/flight?${query}`);
        setFlights(response.data.data); // Update state with filtered flights
      } catch (err) {
        setError("Unable to fetch flights based on your search criteria.");
      } finally {
        setLoading(false);
      }
    };
    handleSearch();
  },[searchData])

    // Handle input changes
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setSearchData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
   
    };

    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col bg-blue-100 w-full justify-center items-center">
          <h2 className="text-black-800 text-3xl font-extrabold text-center md:text-5xl">
            Flight Search
          </h2>
          <p className="mt-2 text-lg text-gray-500 md:text-xl">
            Search for your flights with ease.
          </p>

          <div className="bg-white border-4 border-gray-200 shadow-xl rounded-3xl p-8 z-10 max-w-4xl w-full mt-10">
            <form  className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label>Departure City</label>
                <input
                  type="text"
                  name="departureCity"
                  value={searchData.departureCity}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                  placeholder="Enter Departure City"
                />
              </div>
              <div>
                <label>Arrival City</label>
                <input
                  type="text"
                  name="ArrivalCity"
                  value={searchData.ArrivalCity}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                  placeholder="Enter Arrival City"
                />
              </div>
              <div>
                <label>Departure Date</label>
                <input
                  type="date"
                  name="departuredate"
                  value={searchData.departuredate}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div className="col-span-2 text-center">
                <button  className="bg-blue-500 text-white py-2 px-4 rounded">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Display flights */}
        <div className="mt-10 w-full max-w-6xl">
          {loading && <p className="text-center text-gray-500">Loading...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array.isArray(flights) && flights.length > 0 ? (
              flights.map((flight, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg shadow-md p-4 bg-white"
                >
                  <h3 className="text-xl font-bold text-blue-700">
                    {flight.Flightname}
                  </h3>
                  <p><strong>From:</strong> {flight.departureCity}</p>
                  <p><strong>To:</strong> {flight.ArrivalCity}</p>
                  <p><strong>Date:</strong> {new Date(flight.departuredate).toLocaleDateString()}</p>
                  <p><strong>Arrival Time:</strong> {flight.ArrivalTime}</p>
                  <p><strong>Price:</strong> {flight.price}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No flights found.</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  export default Booking;
