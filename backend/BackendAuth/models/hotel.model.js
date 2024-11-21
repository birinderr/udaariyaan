// models/hotel.model.js

import mongoose from 'mongoose';

// Hotel schema
const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  pricePerNight: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String },
  rating: { type: Number, default: 4.5 }, // Optional
  availability: [
    {
      startDate: { type: Date },
      endDate: { type: Date },
    },
  ], // Optional for future extensions like filtering by date
});

// Booking schema
const bookingSchema = new mongoose.Schema({
  hotelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  guests: { type: Number, required: true }
});

// Models
export const Hotel = mongoose.model('Hotel', hotelSchema);
export const Booking = mongoose.model('Booking', bookingSchema);
