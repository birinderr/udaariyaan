import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex border-b-2 p-4 justify-between bg-gray-200 ">
      <h1 className="text-xl font-semibold">Udaariyaan</h1>
      <ul className="flex w-1/3 justify-evenly">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-500"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-500"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-500"
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-500"
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
