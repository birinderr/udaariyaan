import React, { useEffect } from "react";
import { useAuthStore } from "../store/authStore";

const Profile = () => {
    const { user, isAuthenticated, error, isLoading, isCheckingAuth } = useAuthStore();

    // Redirect to login page if not authenticated
    useEffect(() => {
        if (!isCheckingAuth && !isAuthenticated) {
            alert("You must log in to access this page");
            window.location.href = "/login";
        }
    }, [isAuthenticated, isCheckingAuth]);

    if (isLoading || isCheckingAuth) {
        return <div className="loading text-center py-10">Loading...</div>;
    }

    if (error) {
        return <div className="error-message text-red-500 text-center py-5">{error}</div>;
    }

    return (
        <div className="profile-page-container bg-gray-100 min-h-screen flex flex-col items-center">
            <div className="profile-card bg-white shadow-lg rounded-lg p-6 mt-10 w-11/12 md:w-1/2">
                <h1 className="text-3xl font-bold text-center mb-6">
                    Welcome, {user?.name || "User"}!
                </h1>
                <div className="profile-details text-lg">
                    <p className="mb-2">
                        <strong>Email:</strong> {user?.email}
                    </p>
                    <p className="mb-2">
                        <strong>Last Login:</strong>{" "}
                        {new Date(user?.lastLogin).toLocaleString()}
                    </p>
                    <p className="mb-2">
                        <strong>Account Verified:</strong>{" "}
                        {user?.isVerified ? "Yes" : "No"}
                    </p>
                </div>
                <div className="profile-actions flex justify-center mt-6 space-x-4">
                    <button
                        onClick={() => window.location.href = "/booking"}
                        className="action-button bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Book a Trip
                    </button>
                    <button
                        onClick={() => window.location.href = "/feedback"}
                        className="action-button bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                    >
                        Leave Feedback
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
