import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import { TfiFaceSad } from "react-icons/tfi";

const Error = () => {
  return (
    <div>
      <div className="flex justify-center mt-2">
        <TfiFaceSad className="text-[260px] text-gray-500" />
      </div>

      <h1 className="text-center text-[50px] text-gray-500">404</h1>
      <h2 className="text-center text-[30px] text-gray-500">Page not found</h2>
      <p className="text-gray-400 text-center">
        The page you are looking for doesn't exist or an other error occured.
      </p>
      <h1 className="text-center text-lg">
        <Link to="/" className="text-blue-500">
          Go back
        </Link>
      </h1>
    </div>
  );
};

export default Error;
