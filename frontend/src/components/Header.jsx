import React from "react";
import { NavLink } from "react-router-dom";
import UseOnlineStatus from "../UseOnlineStatus";
import { HiStatusOffline } from "react-icons/hi";
import { HiStatusOnline } from "react-icons/hi";
import { useAuthStore } from "../store/authStore"; // Import the auth store

const Header = () => {
  const onlineStatus = UseOnlineStatus();
  const { isAuthenticated } = useAuthStore(); // Get authentication state

  return (
    <div className="flex border-b-2 p-4 justify-between bg-blue-300">
      <h1 className="text-2xl font-bold">Udaariyaan</h1>
      <ul className="flex w-1/2 justify-evenly text-lg font-semibold">
        <li className="flex gap-2 items-center">
          Status:{" "}
          {onlineStatus ? (
            <p className="text-green-600">
              <HiStatusOnline className="text-2xl" />
            </p>
          ) : (
            <p className="text-red-600">
              <HiStatusOffline />
            </p>
          )}
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-700"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/booking"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-700"
            }
          >
            Flights
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Hotel"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-700"
            }
          >
            Hotels
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cabs"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-700"
            }
          >
            Cabs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-700"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/feedback"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-700"
            }
          >
            Feedback
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-700"
            }
          >
            Profile
          </NavLink>
        </li>
        {!isAuthenticated && ( // Conditionally render the Login button
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-700"
              }
            >
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
