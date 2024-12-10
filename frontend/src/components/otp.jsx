import React, { useState } from "react";
import { useAuthStore } from "../store/authStore.js";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { handleVerifyOtp } = useAuthStore();
  const email = location.state?.email;
  const handleSendOtp = async () => {
    try {
      const response = await axios.post("http://localhost:3000/otp/send-otp", {
        email
      });

      console.log("good");
    } catch (error) {
      console.log("error occured");
    }
  };
  const handleOtp = async (e) => {
    e.preventDefault();
    setError(""); // Reset the error message before verification

    try {
      const response=await handleVerifyOtp(email, otp);
       // Verify OTP
      console.log(response);
      if(response.status==200)
      {
        navigate("/profile"); // Navigate only if OTP is verified successfully
      }
      else{
      toast("otp not verified");
      }
     // Navigate only on success
    } catch (error) {
      setError(error.message || "OTP verification failed"); // Handle error
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          OTP Verification
        </h2>

        {error && (
          <p className="text-center text-red-500 text-sm font-semibold mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleOtp} className="space-y-6">
          <div>
            <label
              htmlFor="otp"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Enter OTP
            </label>
            <input
              id="otp"
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-800 placeholder-gray-500"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter the OTP sent to your email"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-medium rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200"
          >
            Verify OTP
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-700">
          Didn't receive the OTP?{" "}
          <button
            onClick={handleSendOtp}
            className="text-orange-500 font-medium hover:underline"
          >
            Resend OTP
          </button>
        </p>
      </div>
    </div>
  );
};

export default OtpVerification;
