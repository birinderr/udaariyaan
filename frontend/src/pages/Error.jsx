import React from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import { TfiFaceSad } from "react-icons/tfi";

const Error = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <section className="bg-gray-300 h-screen py-6 flex">
      <div className="flex flex-col my-6 gap-5">
        <h1 className=" text-blue-500 text-5xl">Oops! Something Went Wrong.</h1>
        <div className="flex flex-col gap-2">
          <span className="text-lg">We looked everywhere for this page.</span>
          <span className="text-lg">Are you sure the URL is correct?</span>
          <span className="text-lg">Get in touch with the site owner</span>
        </div>

        <button
          className="bg-white border-blue-400 border-2 rounded-md p-3 hover:bg-blue-400 duration-200 hover:text-white active:bg-blue-700"
          onClick={handleClick}
        >
          Go Back Home
        </button>
      </div>
    </section>
  );
};

export default Error;
