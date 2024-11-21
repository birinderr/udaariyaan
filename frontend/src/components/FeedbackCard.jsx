import React, { useCallback, useEffect, useState } from "react";

const FeedbackCard = ({ name, message }) => {
  return (
    <div className="w-[400px]  h-max max-w-md flex flex-col gap-3 border shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-gray-50 hover:scale-105 duration-300">
      <p className="p-4 text-center">{message}</p>
      <div className="bg-blue-400 h-full py-2 w-full flex flex-col items-center justify-center gap-3">
        <h1 className="text-lg text-white font-bold text-center">{name}</h1>
      </div>
    </div>
  );
};

export default FeedbackCard;
