import React, { createContext } from "react";
import { NavLink } from "react-router-dom";
import UseOnlineStatus from "../UseOnlineStatus";
import { HiStatusOffline } from "react-icons/hi";
import { HiStatusOnline } from "react-icons/hi";

const Header = () => {
  const onlineStatus = UseOnlineStatus();
  return (
    <div className="flex border-b-2 p-4 justify-between bg-blue-300 ">
      <h1 className="text-2xl font-bold">Udaariyaan</h1>
      <ul className="flex w-1/3 justify-evenly text-lg font-semibold">
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
      </ul>
    </div>
  );
};

export default Header;
