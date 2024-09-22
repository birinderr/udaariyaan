import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex border-b-2 p-4 justify-between bg-gray-300 ">
      <h1 className="text-xl font-bold">Udaariyaan</h1>
      <ul className="flex w-1/3 justify-evenly font-semibold">
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
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-700"
            }
          >
            Contact
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
