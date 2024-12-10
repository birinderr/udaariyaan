import React from "react";

const OfflineCard = () => {
  return (
    <div className="h-screen flex items-center justify-center w-full gap-8">
      <div className="flex flex-col gap-3">
      <h1 className="text-red-500 text-5xl font-bold">Looks like you are offline!</h1>
      <h1 className="text-2xl font-semibold">
        1. Check the network cables, modem, and router
      </h1>
      <h1 className="text-2xl font-semibold">2. Reconnect to the Wi-Fi</h1>
      </div>
      <div>
        <img src="./nointernet.avif" alt="no-connection" />
      </div>
      
    </div>
  );
};

export default OfflineCard;
