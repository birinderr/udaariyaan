import mongoose from 'mongoose';
import Planeschema  from '../models/planebooking.model.js';
import dotenv from 'dotenv';

dotenv.config();
const MONGO_URI = process.env.Mongo_URI;

const sampleplane = [
  {
    "departureCity": "India",
    "ArrivalCity": "United States",
    "Flightname": "Air India AI-101",
    "departuredate": "2024-12-01T08:30:00Z",
    "ArrivalTime": "14:00",
    "price": "850"
  },
  {
    "departureCity": "United Kingdom",
    "ArrivalCity": "India",
    "Flightname": "British Airways BA-142",
    "departuredate": "2024-12-02T10:00:00Z",
    "ArrivalTime": "23:30",
    "price": "600"
  },
  {
    "departureCity": "Canada",
    "ArrivalCity": "Australia",
    "Flightname": "Air Canada AC-301",
    "departuredate": "2024-12-05T13:45:00Z",
    "ArrivalTime": "22:15",
    "price": "1100"
  },
  {
    "departureCity": "Germany",
    "ArrivalCity": "France",
    "Flightname": "Lufthansa LH-223",
    "departuredate": "2024-12-03T06:20:00Z",
    "ArrivalTime": "09:50",
    "price": "350"
  },
  {
    "departureCity": "Japan",
    "ArrivalCity": "South Korea",
    "Flightname": "Japan Airlines JL-309",
    "departuredate": "2024-12-04T15:00:00Z",
    "ArrivalTime": "18:00",
    "price": "400"
  },
  {
    "departureCity": "China",
    "ArrivalCity": "Russia",
    "Flightname": "China Eastern MU-564",
    "departuredate": "2024-12-06T09:00:00Z",
    "ArrivalTime": "13:30",
    "price": "500"
  },
  {
    "departureCity": "Brazil",
    "ArrivalCity": "Argentina",
    "Flightname": "LATAM Airlines LA-702",
    "departuredate": "2024-12-07T07:15:00Z",
    "ArrivalTime": "11:45",
    "price": "450"
  },
  {
    "departureCity": "South Africa",
    "ArrivalCity": "Egypt",
    "Flightname": "South African Airways SA-909",
    "departuredate": "2024-12-08T11:30:00Z",
    "ArrivalTime": "16:00",
    "price": "700"
  }
];

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
