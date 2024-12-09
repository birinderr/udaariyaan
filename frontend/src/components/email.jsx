import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthStore } from "../store/authStore";

const BookingForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { totalAmount } = location.state;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Generate random booking ID
    const randomBookingId = `BOOK-${Math.floor(100000 + Math.random() * 900000)}`;

    try {
      await axios.post("http://localhost:3000/api/booking/save", {
        userId: user._id, 
        bookingId: randomBookingId,
        totalAmount: totalAmount,
        name: user.name.trim(),
        email: user.email,
        phone: user.phone.trim(),
        address: user.address.trim(),
      });


      const response = await axios.post("http://localhost:3000/send/sendbooking", {
        email: user.email,
        bookingDetails: {
          name: user.name.trim(),
          bookingId: randomBookingId,
          totalAmount: totalAmount,
          address: user.address.trim(),
          phone: user.phone.trim(),
        },
      });

      toast(response.data.message);
    } catch (error) {
      console.error("Error sending email:", error);
      toast("Failed to send booking confirmation email.");
    }
  };

  // Helper function to check if a field is empty (trim spaces)
  const isFieldEmpty = (field) => !field || field.trim().length === 0;

  // Check if user details are incomplete
  const isDetailsIncomplete =
    isFieldEmpty(user.name) || isFieldEmpty(user.address) || isFieldEmpty(user.phone);

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded shadow">
      <h1 className="text-2xl font-bold mb-5">Booking Confirmation Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <span className="block text-sm font-medium mb-2">
            Name: {isFieldEmpty(user.name) ? "Not Provided" : user.name}
          </span>
        </div>
        <div className="mb-4">
          <span className="block text-sm font-medium mb-2">Email: {user.email}</span>
        </div>
        <div className="mb-4">
          <span className="block text-sm font-medium mb-2">
            Phone: {isFieldEmpty(user.phone) ? "Not Provided" : user.phone}
          </span>
        </div>
        <div className="mb-4">
          <span className="block text-sm font-medium mb-2">
            Address: {isFieldEmpty(user.address) ? "Not Provided" : user.address}
          </span>
        </div>
        <div className="mb-4">
          <span className="block text-sm font-medium mb-2">Total amount: ${totalAmount}</span>
        </div>
        {isDetailsIncomplete ? (
          // If user details are incomplete, show "Update Details" button
          <button
            type="button"
            onClick={() => navigate("/profile")}
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Update Details
          </button>
        ) : (
          // If user details are complete, show "Confirm Booking" button
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Confirm Booking
          </button>
        )}
      </form>
    </div>
  );
};

export default BookingForm;
