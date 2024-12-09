import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import { useAuthStore } from "../store/authStore";


const BookingForm = () => {
  const location = useLocation();
  const { user } = useAuthStore();
  const { totalAmount } = location.state;
  const { email } = location.state;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    hotelName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Generate random booking ID
    const randomBookingId = `BOOK-${Math.floor(100000 + Math.random() * 900000)}`;

    try {
      const response = await axios.post('http://localhost:3000/send/sendbooking', {
        email: user.email,
        bookingDetails: {
          name: user.name,
          bookingId: randomBookingId, // Use the generated booking ID
          totalAmount: totalAmount,
          address:user.address,
          phone:user.phone,
        },
      });

      toast(response.data.message);

      setFormData({
        name: '',
        email: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast('Failed to send booking confirmation email.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded shadow">
      <h1 className="text-2xl font-bold mb-5">Booking Confirmation Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <span className="block text-sm font-medium mb-2">Name: {user.name}</span>
        </div>
        <div className="mb-4">
          <span className="block text-sm font-medium mb-2">Email: {user.email}</span>
        </div>
        <div className="mb-4">
          <span className="block text-sm font-medium mb-2">Phone: {user.phone}</span>
        </div>
        <div className="mb-4">
          <span className="block text-sm font-medium mb-2">Address: {user.address}</span>
        </div>
        <div className="mb-4">
          <span className="block text-sm font-medium mb-2">Total amount: ${totalAmount}</span>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
