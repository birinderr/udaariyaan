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
    <div className="flex p-4 py-6 justify-between bg-gray-300 border-t-2 px-11">
      <div className="flex flex-col gap-5 items-start">
        {/* more about company */}
        <h1 className="text-xl font-bold">More About Company</h1>
        <div className="leading-8">
          a comprehensive travel ticket booking platform designed <br /> to make
          travel planning easy, convenient, and accessible <br /> for everyone.
          Built with a user-friendly interface.
          <p className="text-right">- Patrick Victoria CEO</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-start">
        {/* keep connected */}
        <h1 className="text-xl font-bold">Keep Connected</h1>
        <div className="flex flex-col gap-3 items-start">
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
        <h1 className="text-xl font-bold">Contact Information</h1>
        <div className="flex flex-col gap-3 items-start">
          <div className="flex gap-2 items-center">
            {" "}
            <FaHouse className="text-xl" />
            GlassGlow Dr 40Fe 72.
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
