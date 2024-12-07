import React from "react";
import { useCartStore } from "../store/cartStore";

const Cart = () => {
  const { cart, removeFromCart } = useCartStore();

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            Your cart is empty.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cart.map((item) => (
              <div
                key={item._id}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={item.imageUrl || "https://via.placeholder.com/640x360"}
                  alt={item.name || item.Flightname}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">
                    {item.name || item.Flightname}
                  </h3>
                  <p className="text-gray-600">
                    {item.location || item.departureCity + " to " + item.ArrivalCity}
                  </p>
                  <p className="text-blue-600 font-bold">
                    ${item.price || item.pricePerNight}
                  </p>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
