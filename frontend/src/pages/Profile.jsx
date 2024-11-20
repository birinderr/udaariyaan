import React, { useState } from "react";
import { useAuthStore } from "../store/authStore";
import { FaArrowUp } from "react-icons/fa";

const Profile = () => {
  const { user, logout, isAuthenticated, updateUser } = useAuthStore();
  const [formData, setFormData] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
    address: user?.address || "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const responseMessage = await updateUser(formData);
      setMessage(responseMessage);
    } catch (error) {
      setMessage("Error updating profile.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div
        className="flex flex-col items-center justify-center h-screen"
        style={{
          background: "linear-gradient(to right, #f5f7fa, #c3cfe2)", // Gradient background
        }}
      >
        <h1 className="text-2xl font-bold mb-4">You are not logged in.</h1>
        <button
          onClick={() => (window.location = "/login")}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen"
      style={{
        background: "linear-gradient(to right, #f5f7fa, #c3cfe2)", // Page gradient background
      }}
    >
      <div
        className="w-full text-white text-center py-20"
        style={{
          backgroundColor: "#bfdbfe", // Blue background
          clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)", // Wave design
        }}
      >
        <h1 className="text-4xl font-bold text-black">Welcome, {user?.name || "User"}!</h1>
        <p className="text-lg mt-2 text-black">Manage your profile settings below</p>
      </div>
      <div
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md mt-[-50px]"
        style={{
          zIndex: 10, // Ensure the card stays above the blue background
        }}
      >
        <p className="text-lg font-semibold mb-4">Update Profile Information:</p>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          >
            Update
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-green-600">{message}</p>
        )}
      </div>
      <button
        onClick={logout}
        className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
      >
        Logout
      </button>
      <div
        className="fixed bg-blue-400 active:bg-blue-500 p-2 text-white cursor-pointer bottom-4 right-3"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <FaArrowUp />
      </div>
    </div>
  );
};

export default Profile;
