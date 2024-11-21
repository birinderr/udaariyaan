import mongoose from 'mongoose';
import { Hotel } from '../models/hotel.model.js'; 
import dotenv from 'dotenv';
dotenv.config();

console.log('Mongo URI:', process.env.MONGO_URI); // Check if it's loaded


// Your MongoDB URI should be defined in your environment variable (MONGO_URI) already
const MONGO_URI = process.env.Mongo_URI;

const sampleHotels = [
  {
    name: 'Oceanview Resort',
    location: 'Miami',
    pricePerNight: 300,
    availableDates: [
      { startDate: '2024-12-01', endDate: '2024-12-10' },
    ],
    imageUrl: 'https://example.com/oceanview.jpg',
    rating: 4.8,
    amenities: ['WiFi', 'Pool', 'Gym', 'Spa'],
  },
  {
    name: 'Mountain Retreat',
    location: 'Colorado',
    pricePerNight: 150,
    availableDates: [
      { startDate: '2024-11-20', endDate: '2024-11-30' },
    ],
    imageUrl: 'https://example.com/mountainretreat.jpg',
    rating: 4.5,
    amenities: ['WiFi', 'Hot Tub', 'Hiking'],
  },
  {
    name: 'City Center Hotel',
    location: 'New York',
    pricePerNight: 250,
    availableDates: [
      { startDate: '2024-12-05', endDate: '2024-12-15' },
    ],
    imageUrl: 'https://example.com/citycenter.jpg',
    rating: 4.2,
    amenities: ['WiFi', 'Restaurant', 'Gym'],
  },
];

const addSampleHotels = async () => {
  try {
    await Hotel.insertMany(sampleHotels);
    console.log('Sample hotels added successfully!');
  } catch (error) {
    console.error('Error adding sample hotels:', error);
  }
};

// Run the script
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    return addSampleHotels();
  })
  .then(() => {
    mongoose.connection.close();  // Close the connection after inserting data
  })
  .catch((error) => {
    console.error('Error during MongoDB connection or data insertion:', error);
    mongoose.connection.close();
  });
