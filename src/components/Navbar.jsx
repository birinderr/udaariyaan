const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <ul className="flex justify-center gap-20 bg-gray-800 text-white items-center h-14">
        <h1 className="text-2xl font-bold hover:text-orange-500 duration-200">
          <span className="text-orange-500">U</span>daariyaan
        </h1>
        <li className="hover:text-orange-500 cursor-pointer duration-200 text-slate-300">
          ✈️Flights
        </li>
        <li className="hover:text-orange-500 cursor-pointer duration-200 text-slate-300">
          🏢Hotels
        </li>
        <li className="hover:text-orange-500 cursor-pointer duration-200 text-slate-300">
          🚅Trains
        </li>
        <li className="hover:text-orange-500 cursor-pointer duration-200 text-slate-300">
          🚕Cabs
        </li>
        <li className="hover:text-orange-500 cursor-pointer duration-200 text-slate-300">
          🚌Bus
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
