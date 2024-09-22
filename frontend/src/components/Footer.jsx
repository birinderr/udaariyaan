import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex p-4 py-6 justify-between bg-gray-200 border-t-2 ">
      <div className="flex flex-col gap-5">
        {/* more about company */}
        <h1 className="text-lg font-semibold">More About Company</h1>
        <div className="leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
          Aliquam voluptas obcaecati, nam voluptate eligendi <br /> consectetur
          ipsum minima! Rem, sit unde.
          <p className="text-right">- Patrick Victoria CEO</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {/* keep connected */}
        <h1 className="text-lg font-semibold">Keep Connected</h1>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center hover:underline">
            {" "}
            <FaFacebook className="text-blue-500 text-xl" /> Like us on Facebook
          </div>
          <div className="flex gap-2 items-center hover:underline">
            {" "}
            <FaSquareXTwitter className="text-xl" /> Follow us on X
          </div>
          <div className="flex gap-2 items-center hover:underline">
            {" "}
            <FaLinkedin className="text-blue-600 text-xl" /> Connect with us on
            Linkedin
          </div>
          <div className="flex gap-2 items-center hover:underline">
            {" "}
            <FaPinterest className="text-red-600 text-xl" /> Follow us on
            Pinterest
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {/* contact information */}
        <h1 className="text-lg font-semibold">Contact Information</h1>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            {" "}
            <FaHouse className="text-xl" /> Lorem ipsum dolor. GlassGlow Dr 40Fe
            72.
          </div>
          <div className="flex gap-2 items-center">
            <FaMobile className="text-xl" /> 1234567890
          </div>
          <div className="flex gap-2 items-center">
            <IoMdMail className="text-xl" /> contact@example.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
