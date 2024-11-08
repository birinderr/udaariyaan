import React from "react";
import { useEffect, useState } from "react";
import FeedbackCard from "../components/FeedbackCard";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      message: e.target.message.value,
    };
    try {
      const res = await fetch("http://localhost:3000/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!res) {
        console.log("Failed to send feedback");
      } else {
        console.log(formData);
      }
      setName("");
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  const [feedback, setFeedback] = useState([]);
  const fetchFeedback = async () => {
    try {
      const res = await fetch("http://localhost:3000/feedback", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        setFeedback(data);
        console.log(data);
      } else {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
    } catch (error) {
      console.log("Error while fetching feedback: ", error);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, [handleSubmit]);
  return (
    <section>
      <div className="flex">
        <div className="w-[500px] mt-10 p-6 bg-gray-100  border shadow-[0_3px_10px_rgb(0,0,0,0.2)]s">
          <h2 className="text-2xl font-bold mb-4 text-center">Feedback Form</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                name="name"
                className="w-full px-3 py-2 border border-gray-300  focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="w-full px-3 py-2 border border-gray-300  focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your message (25-50 words)"
                rows="4"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4  hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-300 gap-10 py-10 flex flex-wrap mt-10">
        {feedback.map((feed) => {
          return (
            <FeedbackCard
              name={feed.name}
              message={feed.message}
              key={feed._id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FeedbackForm;
