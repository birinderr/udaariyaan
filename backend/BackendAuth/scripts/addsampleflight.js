import mongoose from 'mongoose';
import Planeschema  from '../models/planebooking.model.js';
import dotenv from 'dotenv';

dotenv.config();
const MONGO_URI = process.env.Mongo_URI;

 const sampleplane = [
  {
    "departureCity": "New York",
    "ArrivalCity": "Los Angeles",
    "Flightname": "Air America",
    "departuredate": "2024-12-01T08:00:00Z",
    "ArrivalTime": "11:30 AM",
    "price": "300",
    "imageUrl": "data:image/jpeg;base64,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"
  },
  {
    "departureCity": "Chicago",
    "ArrivalCity": "San Francisco",
    "Flightname": "United Sky",
    "departuredate": "2024-12-02T07:15:00Z",
    "ArrivalTime": "10:45 AM",
    "price": "320",
    "imageUrl": "https://media.wired.com/photos/59265f118d4ebc5ab806a072/4:3/w_929,h_697,c_limit/United_737_Max9.jpg"
  },
  {
    "departureCity": "Boston",
    "ArrivalCity": "Miami",
    "Flightname": "Jet Blue",
    "departuredate": "2024-12-03T06:30:00Z",
    "ArrivalTime": "09:00 AM",
    "price": "250",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkA0Q-_B3-sz11Epj4DBniiGTkkJoUEHrdAg&s"
  },
  {
    "departureCity": "Dallas",
    "ArrivalCity": "Seattle",
    "Flightname": "SkyHigh Airlines",
    "departuredate": "2024-12-04T05:00:00Z",
    "ArrivalTime": "08:30 AM",
    "price": "400",
    "imageUrl": "https://www.ch-aviation.com/images/stockPhotos/9752/a70a6563e6319114567dd854bbde5b7d53d461e8.jpg"
  },
  {
    "departureCity": "Atlanta",
    "ArrivalCity": "Denver",
    "Flightname": "Delta Air",
    "departuredate": "2024-12-05T09:45:00Z",
    "ArrivalTime": "12:15 PM",
    "price": "280",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBUk7ZH49PSm8BVQpHRXoOi1shD8-gF8bqig&s"
  },
  {
    "departureCity": "San Diego",
    "ArrivalCity": "Houston",
    "Flightname": "Southwest",
    "departuredate": "2024-12-06T10:30:00Z",
    "ArrivalTime": "01:00 PM",
    "price": "350",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8XcMqC_KiheXwplHitxXzfuQTvAnprKh1Jw&s"
  },
  {
    "departureCity": "Orlando",
    "ArrivalCity": "Detroit",
    "Flightname": "Spirit Wings",
    "departuredate": "2024-12-07T11:00:00Z",
    "ArrivalTime": "01:30 PM",
    "price": "230",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxN37kVBk5zyDJgpqUBUkvVqaxotA-eVWIxQ&s"
  },
  {
    "departureCity": "Phoenix",
    "ArrivalCity": "Portland",
    "Flightname": "Sunwest Airlines",
    "departuredate": "2024-12-08T03:15:00Z",
    "ArrivalTime": "05:45 AM",
    "price": "370",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZkB2inCRsacIRP2fapbDb1OXxAJnTUC-pxQ&s   "
  },
  {
    "departureCity": "Las Vegas",
    "ArrivalCity": "Salt Lake City",
    "Flightname": "Maverick",
    "departuredate": "2024-12-09T12:30:00Z",
    "ArrivalTime": "02:00 PM",
    "price": "200",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOiSPqhw6BudSV4u2yXvo8Ax2Oq0EVkd7iKg&s"
  },
  {
    "departureCity": "Philadelphia",
    "ArrivalCity": "Baltimore",
    "Flightname": "Eastern Star",
    "departuredate": "2024-12-10T04:00:00Z",
    "ArrivalTime": "05:30 AM",
    "price": "120",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAm3qO47kP-2_5OS0tyFg98WJ8DkVRTYLqmw&s"
  }
]



 

const addplane = async () => {
  try {
    await Planeschema.insertMany(sampleplane);
    console.log("Sample flight data inserted successfully.");
  } catch (error) {
    console.error("Error inserting sample data:", error);
  }
};

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    return addplane();
  })
  .then(() => {
    mongoose.connection.close();  // Close the connection after inserting data
  })
  .catch((error) => {
    console.error('Error during MongoDB connection or data insertion:', error);
    mongoose.connection.close();
  });
