import React from "react";

const FeedbackForm = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="w-[800px] bg-gray-200 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="flex items-center">
          <span className="text-xl font-bold">👋 Help us improve</span>
        </div>
        <div>
          <div className="flex flex-col">
            <label htmlFor="">How often do you use our Booking platform?</label>
            <input
              type="text"
              placeholder="Daily/Weekly/Monthly/Occasionally"
              className="border w-[400px]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">
              What is the main reason you use our platform for?
            </label>
            <input
              type="text"
              placeholder="to book flights, train tickets, plan trips, find deals, etc."
              className="border w-[400px]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">
              What challenges does our platform help you solve?
            </label>
            <input
              type="text"
              placeholder="finding affordable travel options, booking tickets easily"
              className="border w-[400px]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">
              What is your favorite feature on our website?
            </label>
            <input
              type="text"
              placeholder="flight booking, trip planner, price comparison, customer support, etc."
              className="border w-[400px]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">
              What improvements would you like to see on our platform?
            </label>
            <input type="text" className="border w-[400px]" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">
              How would you rate your overall experience with our platform?
            </label>
            <input
              type="text"
              placeholder="Rating scale from 1 to 5"
              className="border w-[400px]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Any additional feedback or suggestions?</label>
            <input
              type="text"
              placeholder="Optional"
              className="border w-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
