import React, { useState } from 'react';
import { useAuthStore } from "../store/authStore.js";
import { useNavigate, useLocation } from 'react-router-dom';

const OtpVerification = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { handleVerifyOtp } = useAuthStore();
  const email = location.state?.email;

  const handleotp = async (e) => {
    e.preventDefault();
    setError(''); // Reset the error message before verification

    try {
      await handleVerifyOtp(email, otp); // Verify OTP
      console.log(email);
      navigate("/profile"); // Navigate only on success
    } catch (error) {
      setError(error.message || 'OTP verification failed'); // Handle error
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold text-center mb-4">OTP Verification</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleotp}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Enter OTP</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
