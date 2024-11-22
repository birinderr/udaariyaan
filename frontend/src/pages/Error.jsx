import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <section className="bg-gray-300 h-screen py-6 flex gap-10 justify-center items-center">
      <div className="flex flex-col my-6 gap-5">
        <h1 className=" text-blue-500 text-5xl">
        Oops! Something Went Wrong.
        </h1>
        <div className="flex flex-col gap-2">
          <span className="text-lg">We looked everywhere for this page.</span>
          <span className="text-lg">Are you sure the URL is correct?</span>
          <span className="text-lg">Get in touch with the site owner</span>
        </div>

        <button
          className="bg-gray-100 border-blue-500 border-2 rounded-md p-3 hover:bg-blue-500 duration-200 hover:text-white active:bg-blue-700"
          onClick={handleClick}
        >
          Go Back Home
        </button>
      </div>
      <div>
        <img
          src="./rb_2150696458.png"
          alt="err-img"
          className="h-[500px] w=[500px]"
        />
      </div>
    </section>
  );
};

export default Error;
