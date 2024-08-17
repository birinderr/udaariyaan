import { PiAirplaneTiltLight } from "react-icons/pi";
import { LuHotel } from "react-icons/lu";
import { IoTrainOutline } from "react-icons/io5";
import { IoCarOutline } from "react-icons/io5";
import { IoBusOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <ul className="flex justify-center gap-20 bg-gray-800 text-white items-center h-14">
        <h1 className="text-2xl font-bold">
          <span className="text-orange-500">U</span>daariyaan
        </h1>
        <li className="hover:text-orange-500 cursor-pointer duration-200 text-slate-200 flex">
          <PiAirplaneTiltLight className="text-2xl" />
          Flights
        </li>
        <li className="hover:text-orange-500 cursor-pointer duration-200 text-slate-200 flex">
          <LuHotel className="text-2xl" />
          Hotels
        </li>
        <li className="hover:text-orange-500 cursor-pointer duration-200 text-slate-200 flex">
          <IoTrainOutline className="text-2xl" />
          Trains
        </li>
        <li className="hover:text-orange-500 cursor-pointer duration-200 text-slate-200 flex">
          <IoCarOutline className="text-2xl" />
          Cabs
        </li>
        <li className="hover:text-orange-500 cursor-pointer duration-200 text-slate-200 flex">
          <IoBusOutline className="text-2xl" />
          Bus
        </li>
        <li className="hover:text-indigo-500 cursor-pointer duration-200">
          Manage Booking
        </li>
        <button className="font-semibold hover:text-orange-500 duration-200">
          LOGIN/SIGNUP
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
