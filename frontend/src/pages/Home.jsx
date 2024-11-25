import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { SlSocialFacebook } from "react-icons/sl";
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import ScrollToTop from "../components/ScrollToTop";
import { Typewriter } from "react-simple-typewriter";
import UseOnlineStatus from "../UseOnlineStatus.jsx";
import OfflineCard from "../components/OfflineCard.jsx";

const Home = () => {
  const navigate = useNavigate();

  const handleHotelClick = () => {
    navigate("/Hotel");
  };
  const handlebookClick = () => {
    navigate("/flight");
  };
  const useonlinestatus = UseOnlineStatus();
  if (useonlinestatus === false) {
    return (
      <OfflineCard />
    );
  } else {
    return (
      <div>
        <ScrollToTop />
        <section
          className="h-96 bg-cover"
          // style={{
          //   backgroundImage: `url('https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8MHwwfHx8MA%3D%3D')`,
          // }}
          style={{
            backgroundImage: `url('https://media.istockphoto.com/id/641294046/photo/aerial-view-on-red-car-on-the-road-near-tea-plantation.jpg?s=2048x2048&w=is&k=20&c=PoTEkilwEZS4nOnn7olNWmPdhLtX92gZ5reoQa0iSZY=')`,
          }}
        >
          <div className="flex justify-center items-center h-full bg-black bg-opacity-30 ">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">
                Udaariyaan -
                <Typewriter
                  words={[
                    " Explore the World with Ease",
                    " Your Next Journey Begins Here",
                    " Travel Far, Travel Safe, Travel Smart",
                  ]}
                  loop={Infinity}
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </h2>
              <p className="mb-6">
                Revolutionizing Travel with Seamless, Secure and Personalized
                Booking Solutions
              </p>
            </div>
          </div>
        </section>

        {/* destination section */}
        <section id="destinations" className="py-12 ">
          <h2 className="text-3xl font-bold text-center mb-8">Book tickets</h2>
          <div className="flex justify-evenly">
            <div
              className="w-[400px] border  p-4 flex flex-col gap-3 shadow-lg hover:scale-105 duration-300 hover:cursor-pointer"
              onClick={handlebookClick}
            >
              {/* airplanes tickest */}
              <img
                className="w-[400px] h-[350px]"
                src="https://images.unsplash.com/photo-1523833082115-1e8e294bd14e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFpcnBsYW5lfGVufDB8MHwwfHx8MA%3D%3D"
                alt="airplane"
              />
              <h1 className="text-lg font-bold">Airplane tickets booking</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui,
                nulla!
              </p>
              <button className="bg-blue-600 py-2 px-3 w-full rounded-full text-white hover:bg-blue-700">
                Book now
              </button>
            </div>
            <div
              className="w-[400px] border  p-4 flex flex-col gap-3 shadow-lg hover:scale-105 duration-300 hover:cursor-pointer"
              onClick={handleHotelClick}
            >
              {/* hotels booking */}
              <img
                className="w-[400px] h-[350px]"
                src="https://images.unsplash.com/photo-1455587734955-081b22074882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHwwfDB8fHww"
                alt="hotel"
              />
              <h1 className="text-lg font-bold">Hotel booking</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui,
                nulla!
              </p>
              <button className="bg-blue-600 py-2 px-3 w-full rounded-full text-white hover:bg-blue-700">
                Book now
              </button>
            </div>
            <div className="w-[400px] border  p-4 flex flex-col gap-3 shadow-lg hover:scale-105 duration-300 hover:cursor-pointer">
              {/* cabs bookings */}
              <img
                className="w-[400px] h-[350px] "
                src="https://media.istockphoto.com/id/108196764/photo/indian-taxi-race.webp?a=1&b=1&s=612x612&w=0&k=20&c=mIXBFiXgekcoAcPkXlWNbEoxdRT6UG7HSrKMtnfGJis="
                alt="cabs"
              />
              <h1 className="text-lg font-bold">Cabs Booking</h1>
              <p className="">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui,
                nulla!
              </p>
              <button className="bg-blue-600 py-2 px-3 w-full rounded-full text-white hover:bg-blue-700">
                Book now
              </button>
            </div>
          </div>
        </section>

        {/* Exclusive Deals & Offers Section */}
        <section id="deals" className="py-12 ">
          <h2 className="text-3xl font-bold text-center mb-8">
            Exclusive Deals & Offers
          </h2>
          <div className="flex justify-evenly">
            <div className="w-[400px] border p-4 flex flex-col gap-3 shadow-lg hover:scale-105 duration-300">
              {/* airplanes tickest */}
              <img
                className="w-[400px] h-[350px]"
                src="https://media.istockphoto.com/id/1331465591/photo/3d-render-of-a-luxury-hotel-swimming-pool.webp?a=1&b=1&s=612x612&w=0&k=20&c=wNu1HhMDzNWPKU4OJYkMbbEoaRt3aJMtZChQu_KaQ3M="
                alt="airplane"
              />
              <h1 className="text-lg font-bold">Luxury Hotel - 30% off</h1>
              <p>
                Book a stay at a 5-star hotel and enjoy a 30% discount on your
                booking.
              </p>
              <button className="text-left w-full  text-blue-600 hover:underline">
                Book Now
              </button>
            </div>
            <div className="w-[400px] border p-4 flex flex-col gap-3 shadow-lg hover:scale-105 duration-300">
              {/* hotels booking */}
              <img
                className="w-[400px] h-[350px]"
                src="https://media.istockphoto.com/id/1094745570/photo/young-woman-in-airplane-takes-mobile-phone-selfie-portrait-during-flight.jpg?s=612x612&w=0&k=20&c=Zj3ZgJjUH51-hbruLu-EgwnwTEW5Yrm9Nw5nrU5UZgI="
                alt="hotel"
              />
              <h1 className="text-lg font-bold">
                Flight Special - Save up to $200
              </h1>
              <p>
                Grab limited-time deals on international flights and save big!
              </p>
              <button className="text-left w-full text-blue-600 hover:underline">
                Grab Offer
              </button>
            </div>
            <div className="w-[400px] border p-4 flex flex-col gap-3 shadow-lg hover:scale-105 duration-300">
              {/* cabs bookings */}
              <img
                className="w-[400px] h-[350px] "
                src="https://media.istockphoto.com/id/1329486499/photo/shot-of-a-young-women-standing-isolated-over-yellow-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=Fvbuy9bB36WMv0gU6gyctB98QkKKXbPw4w1fMy-IviA="
                alt="cabs"
              />
              <h1 className="text-lg font-bold">
                Bank Debit Card Offer - 10% Cashback
              </h1>
              <p className="">
                Use your XYZ Bank debit card and get 10% cashback on all your
                bookings.
              </p>
              <button className=" text-left w-full text-blue-600 hover:underline">
                Claim Offer
              </button>
            </div>
          </div>
        </section>

        {/* testimonial section */}
        <section id="testimonials" className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Clients Say
          </h2>
          <div className="flex justify-evenly">
            <div className="w-[400px] h-[200px] flex flex-col gap-3 border  bg-gray-100">
              <p className="p-4 text-center">
                “The booking process was seamless! I easily found the best deals
                for my trip, and the site was incredibly user-friendly. Highly
                recommend!”
              </p>
              <div className="bg-cyan-400 h-full w-full flex flex-col items-center justify-center gap-3">
                <h1 className="text-lg font-bold">Negan Smith</h1>
                <div className="flex gap-2 justify-center">
                  <SlSocialFacebook className="text-xl" />
                  <PiInstagramLogoLight className="text-xl" />
                  <FaXTwitter className="text-xl" />
                </div>
              </div>
            </div>
            <div className="w-[400px] h-[200px] flex flex-col gap-3 border bg-gray-100">
              <p className="p-4 text-center">
                “Fantastic experience! I got a great discount on my hotel
                booking, and the flight offers were unbeatable. Will definitely
                use this site again!”
              </p>
              <div className="bg-violet-400 h-full w-full flex flex-col items-center justify-center gap-3">
                <h1 className="text-lg font-bold">Daryl Dixon</h1>
                <div className="flex gap-2 justify-center">
                  <SlSocialFacebook className="text-xl" />
                  <PiInstagramLogoLight className="text-xl" />
                  <FaXTwitter className="text-xl" />
                </div>
              </div>
            </div>
            <div className="w-[400px] h-[200px] flex flex-col gap-3 border bg-gray-100">
              <p className="p-4 text-center">
                “Super convenient and easy to navigate. The exclusive offers
                helped me save a lot on my vacation. A must-use for all
                travelers!
              </p>
              <div className="bg-rose-400 h-full w-full flex flex-col items-center justify-center gap-3">
                <h1 className="text-lg font-bold">Rick Grimes</h1>
                <div className="flex gap-2 justify-center">
                  <SlSocialFacebook className="text-xl" />
                  <PiInstagramLogoLight className="text-xl" />
                  <FaXTwitter className="text-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default Home;
