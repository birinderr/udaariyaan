import React from "react";
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

  const isFieldEmpty = (field) => !field || field.trim().length === 0;

  const isDetailsIncomplete =
    isFieldEmpty(user.name) || isFieldEmpty(user.address) || isFieldEmpty(user.phone);

  return (
    <div className="max-w-lg mx-auto mt-12 bg-gradient-to-r from-blue-50 via-white to-blue-50 p-10 rounded-lg shadow-2xl mb-10">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-8 text-center leading-tight">
        Booking Confirmation
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          {[
            { label: "Name", value: user.name },
            { label: "Email", value: user.email },
            { label: "Phone", value: user.phone },
            { label: "Address", value: user.address },
          ].map(({ label, value }, index) => (
            <div key={index} className="flex justify-between items-center border-b pb-2">
              <label className="text-lg font-medium text-gray-700">{label}:</label>
              <p
                className={`text-lg ${
                  isFieldEmpty(value) ? "text-red-500 font-semibold" : "text-gray-800"
                }`}
              >
                {isFieldEmpty(value) ? "Not Provided" : value}
              </p>
            </div>
          ))}
          <div className="flex justify-between items-center border-b pb-2">
            <label className="text-lg font-medium text-gray-700">Total Amount:</label>
            <p className="text-lg text-green-600 font-bold">${totalAmount}</p>
          </div>
        </div>
        <div className="mt-8">
          {isDetailsIncomplete ? (
            <button
              type="button"
              onClick={() => navigate("/profile")}
              className="w-full py-3 px-6 bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white rounded-lg font-medium text-lg hover:scale-105 transition transform shadow-md"
            >
              Update Details
            </button>
          ) : (
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-lg font-medium text-lg hover:scale-105 transition transform shadow-md"
            >
              Confirm Booking
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
