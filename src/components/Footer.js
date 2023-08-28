import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-pink-50">
      <div className="container mx-auto p-4 lg:p-8 text-center">
        <h1 className="font-semibold text-2xl mb-4">Contact Us</h1>
        <h1 className="mb-4">
          This app is developed by{" "}
          <a
            href="https://www.linkedin.com/in/saicharanbandi1208/"
            className="font-semibold underline hover:text-blue-500"
          >
            Sai Charan Bandi
          </a>
        </h1>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://www.linkedin.com/in/saicharanbandi1208/"
            className="text-blue-500 hover:text-blue-700"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://github.com/Charan2409"
            className="text-black hover:text-gray-700"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="mailto:saicharanbandi1208@gmail.com"
            className="text-blue-500 hover:text-blue-700"
          >
            <FaEnvelope className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
