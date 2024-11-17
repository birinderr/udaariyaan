import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const Profile = () => {
  const { user, logout, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();


  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">You are not logged in.</h1>
        <button
          onClick={() => navigate("/login")}
          className="px-4 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600"
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome, {user?.email || "User"}!</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <p className="text-lg font-semibold mb-2">Profile Information:</p>
        <ul className="text-gray-700">
          <li className="mb-2">
            <strong>Email:</strong> {user?.email}
          </li>
          <li>
            <strong>Last Login:</strong>{" "}
            {user?.lastLogin ? new Date(user?.lastLogin).toLocaleString() : "N/A"}
          </li>
        </ul>
      </div>
      <button
        onClick={logout}
        className="mt-4 px-6 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
