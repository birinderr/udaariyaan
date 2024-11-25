import mongoose from 'mongoose';
import { Hotel } from '../models/hotel.model.js'; 
import dotenv from 'dotenv';
dotenv.config();

console.log('Mongo URI:', process.env.MONGO_URI);


const MONGO_URI = process.env.Mongo_URI;

const sampleHotels = [
  {
    name: 'Ocean Breeze Resort',
    location: 'California',
    pricePerNight: 250,
    availableDates: [
      { startDate: '2024-12-01', endDate: '2024-12-15' },
      { startDate: '2025-01-01', endDate: '2025-01-10' },
    ],
    imageUrl: 'https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fHww',
    rating: 4.7,
    amenities: ['WiFi', 'Pool', 'Gym', 'Spa'],
  },
  {
    name: 'Mountain Escape',
    location: 'Colorado',
    pricePerNight: 180,
    availableDates: [
      { startDate: '2024-11-20', endDate: '2024-12-01' },
    ],
    imageUrl: 'https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWxzfGVufDB8fDB8fHww',
    rating: 4.5,
    amenities: ['WiFi', 'Hot Tub', 'Skiing'],
  },
  {
    name: 'Sam Houston',
    location: 'New York',
    pricePerNight: 300,
    availableDates: [
      { startDate: '2024-12-10', endDate: '2024-12-20' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1563340284-cadcc9976727?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww',
    rating: 4.3,
    amenities: ['WiFi', 'Restaurant', 'Parking'],
  },
  {
    name: 'Beachside Retreat',
    location: 'Florida',
    pricePerNight: 200,
    availableDates: [
      { startDate: '2024-12-05', endDate: '2024-12-25' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1454388683759-ee76c15fee26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww',
    rating: 4.8,
    amenities: ['WiFi', 'Beach Access', 'Bar'],
  },
  {
    name: 'Cozy Cabin',
    location: 'Vermont',
    pricePerNight: 150,
    availableDates: [
      { startDate: '2024-11-15', endDate: '2024-11-30' },
    ],
    imageUrl: 'https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWxzfGVufDB8fDB8fHww',
    rating: 4.6,
    amenities: ['WiFi', 'Fireplace', 'Hiking Trails'],
  },
  {
    name: 'City Comfort Hotel',
    location: 'Chicago',
    pricePerNight: 220,
    availableDates: [
      { startDate: '2024-12-01', endDate: '2024-12-10' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1711470623168-885d5b054e57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.2,
    amenities: ['WiFi', 'Gym', 'Conference Rooms'],
  },
  {
    name: 'Desert Oasis',
    location: 'Arizona',
    pricePerNight: 190,
    availableDates: [
      { startDate: '2024-12-10', endDate: '2024-12-20' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1657349229764-4814508f08e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.4,
    amenities: ['WiFi', 'Pool', 'Outdoor Activities'],
  },
  {
    name: 'Lakeside Inn',
    location: 'Michigan',
    pricePerNight: 170,
    availableDates: [
      { startDate: '2024-11-25', endDate: '2024-12-05' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1609915725242-3fcc4e5e8150?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.1,
    amenities: ['WiFi', 'Fishing', 'Boating'],
  },
  {
    name: 'Luxury Heights',
    location: 'Los Angeles',
    pricePerNight: 400,
    availableDates: [
      { startDate: '2024-12-15', endDate: '2025-01-05' },
    ],
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661676056771-f6c2711249e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.9,
    amenities: ['WiFi', 'Spa', 'Private Pool', 'Bar'],
  },
  {
    name: 'Countryside Inn',
    location: 'Texas',
    pricePerNight: 160,
    availableDates: [
      { startDate: '2024-11-20', endDate: '2024-12-01' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544477597-7e30412ada8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.3,
    amenities: ['WiFi', 'Farm-to-Table Dining', 'Hiking'],
  },
  {
    name: 'Island Getaway',
    location: 'Hawaii',
    pricePerNight: 450,
    availableDates: [
      { startDate: '2024-12-20', endDate: '2025-01-10' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1614451153800-c141e95b9054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.9,
    amenities: ['WiFi', 'Beach Access', 'Snorkeling', 'Spa'],
  },
  {
    name: 'Modern Stay',
    location: 'San Francisco',
    pricePerNight: 260,
    availableDates: [
      { startDate: '2024-11-25', endDate: '2024-12-05' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1657349227800-a09220ee7ec8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.4,
    amenities: ['WiFi', 'Gym', 'Rooftop Bar'],
  },
  {
    name: 'Seaside Serenity',
    location: 'South Carolina',
    pricePerNight: 230,
    availableDates: [
      { startDate: '2024-11-30', endDate: '2024-12-15' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1630777978010-c10f2aa33e93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.6,
    amenities: ['WiFi', 'Beach Access', 'Barbecue Facilities'],
  },
  {
    name: 'Historic Haven',
    location: 'Washington D.C.',
    pricePerNight: 300,
    availableDates: [
      { startDate: '2024-12-01', endDate: '2024-12-20' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1721539151779-e6dc7f9de376?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.5,
    amenities: ['WiFi', 'Museum Tours', 'Fine Dining'],
  },
  {
    name: 'Winter Wonderland',
    location: 'Alaska',
    pricePerNight: 280,
    availableDates: [
      { startDate: '2024-12-10', endDate: '2024-12-25' },
    ],
    imageUrl: 'https://plus.unsplash.com/premium_photo-1731414785614-85f9dbf77dd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHxob3RlbHN8ZW58MHx8MHx8fDA%3D',
    rating: 4.7,
    amenities: ['WiFi', 'Snow Activities', 'Fireplace'],
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
