import React from "react";

const OfflineCard = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center w-full gap-8">
      <h1 className="text-red-500 text-5xl font-bold">Looks like you are offline!</h1>
      <h1 className="text-2xl font-semibold">
        1. Checking the network cables, modem, and router
      </h1>
      <h1 className="text-2xl font-semibold">2. Reconnecting to Wi-Fi</h1>
    </div>
  );
};

export default OfflineCard;
