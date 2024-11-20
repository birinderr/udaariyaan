import React from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  return (
    <div
      className="fixed bg-blue-500 active:bg-blue-600 p-2 text-white cursor-pointer bottom-4 right-3 animate-bounce"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <FaArrowUp />
    </div>
  );
};

export default ScrollToTop;
