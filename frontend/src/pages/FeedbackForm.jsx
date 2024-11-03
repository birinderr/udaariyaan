import React from "react";

import { toast } from "react-toastify";

const FeedbackForm = () => {
  function handleClick() {
    toast.success("Thanks for your feedback!");
  }
  return (
    <section className="flex justify-center items-center h-full mt-5 mb-5">
      <div className="w-[600px] h-[850px] bg-gray-50 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-4">
        <div className="flex items-center">
          <span className="text-3xl font-bold">👋 Help us improve</span>
        </div>
        <div className="flex flex-col gap-8 items-start p-2 mt-6">
          <div className="flex flex-col gap-2 items-start w-full">
            <label htmlFor="" className="font-semibold">
              How often do you use our Booking platform?
            </label>
            <input
              type="text"
              placeholder="Daily/Weekly/Monthly/Occasionally"
              className=" border-2 border-gray-300 w-full py-1 px-2 "
            />
          </div>
          <div className="flex flex-col gap-2 items-start w-full">
            <label htmlFor="" className="font-semibold">
              What is the main reason you use our platform for?
            </label>
            <input
              type="text"
              placeholder="to book flights, train tickets, plan trips, find deals, etc."
              className=" border-2 border-gray-300 w-full py-1 px-2"
            />
          </div>
          <div className="flex flex-col gap-2 items-start w-full">
            <label htmlFor="" className="font-semibold">
              What challenges does our platform help you solve?
            </label>
            <input
              type="text"
              placeholder="finding affordable travel options, booking tickets easily"
              className=" border-2 border-gray-300 w-full py-1 px-2"
            />
          </div>
          <div className="flex flex-col gap-2 items-start w-full">
            <label htmlFor="" className="font-semibold">
              What is your favorite feature on our website?
            </label>
            <input
              type="text"
              placeholder="flight booking, trip planner, price comparison, customer support, etc."
              className=" border-2 border-gray-300 w-full py-1 px-2"
            />
          </div>
          <div className="flex flex-col gap-2 items-start w-full">
            <label htmlFor="" className="font-semibold">
              What improvements would you like to see on our platform?
            </label>
            <input
              type="text"
              className=" border-2 border-gray-300 w-full py-1 px-2"
            />
          </div>
          <div className="flex flex-col gap-2 items-start w-full">
            <label htmlFor="" className="font-semibold">
              How would you rate your overall experience with our platform?
            </label>
            <input
              type="text"
              placeholder="Rating scale from 1 to 5"
              className=" border-2 border-gray-300 w-full py-1 px-2"
            />
          </div>
          <div className="flex flex-col gap-2 items-start w-full">
            <label htmlFor="" className="font-semibold">
              Any additional feedback or suggestions?
            </label>
            <input
              type="text"
              placeholder="Optional"
              className=" border-2 border-gray-300 w-full py-1 px-2"
            />
          </div>
          <button
            onClick={handleClick}
            className="bg-blue-600 text-white w-full p-2 hover:bg-blue-700"
          >
            Submit feedback
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
