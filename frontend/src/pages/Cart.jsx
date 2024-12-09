import React from "react";
import { useCartStore } from "../store/cartStore";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const { cart, addToCart, removeFromCart } = useCartStore();

  // Calculate the total amount
  
  const totalAmount = cart.reduce((total, item) => {
    const price = item.price || item.pricePerNight; // Use price or pricePerNight
    return total + price * item.quantity;
  }, 0);
  const navigate=useNavigate()
  const proceed=async(e)=>{
    navigate("/confirm",{
      state:{totalAmount},
    })
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Total Amount Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">Your Bookings</h1>
          {cart.length > 0 && (
            <div className="text-right">
              <h2 className="text-2xl font-bold text-gray-800">
                Total: ${totalAmount.toFixed(2)}
              </h2>
              <button className="bg-green-500 py-1 px-2 text-xl rounded text-white text-center hover:bg-green-600 font-semibold " onClick={proceed}>Procced to pay</button>
            </div>
          )}
        </div>
        <hr className="mb-6 font-bold" />
        {cart.length === 0 ? (
          <div className="flex justify-center items-center flex-col">
            <p className="text-center text-gray-600 text-lg hover:underline">
              <Link to="/">
                Looks like your travel bag is empty! Time to fill it with
                amazing plans!
              </Link>
            </p>
            <img src="./bookingimg.avif" alt="Empty Cart" />
          </div>
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
                    {item.location ||
                      item.departureCity + " to " + item.ArrivalCity}
                  </p>
                  <p className="text-blue-600 font-bold">
                    ${((item.price || item.pricePerNight) * item.quantity).toFixed(2)}
                  </p>
                  <div className="flex items-center mt-4">
                    {/* Decrease Quantity */}
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      -
                    </button>
                    <span className="mx-4">{item.quantity}</span>
                    {/* Increase Quantity */}
                    <button
                      onClick={() => addToCart(item)}
                      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                      +
                    </button>
                  </div>
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
