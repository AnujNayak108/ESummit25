// src/components/ContactUs.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const ContactUs = () => {
  return (
    <div className="min-h-screen  text-primaryText flex justify-center items-center px-4">
      <div className="max-w-5xl w-full p-6 rounded-lg ">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12">
          Contact Us
          <div className="mt-2 h-1 bg-primaryGreen w-20 mx-auto rounded"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="bg-primaryGrey p-6 rounded-lg shadow-inner">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-base font-medium text-primaryText"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your name"
                  className="mt-2 w-full font-normal px-4 py-1 bg-[#303030] text-primaryText border border-borderColor rounded-lg focus:outline-none focus:border-primaryGreen"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-medium text-primaryText"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="mt-2 w-full font-normal px-4 py-1 bg-[#303030] text-primaryText border border-borderColor rounded-lg focus:outline-none focus:border-primaryGreen"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-base font-medium text-primaryText"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter the subject"
                  className="mt-2 w-full font-normal px-4 py-1 bg-[#303030] text-primaryText border border-borderColor rounded-lg focus:outline-none focus:border-primaryGreen"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-base font-medium text-primaryText"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Write your message here"
                  rows="4"
                  className="mt-2 w-full font-normal px-4 py-2 bg-[#303030] text-primaryText border border-borderColor rounded-lg focus:outline-none focus:border-primaryGreen"
                ></textarea>
              </div>
              <button
                type="submit"
                className=" px-8 lg:px-20 mx-auto block py-2  bg-primaryGreen text-white rounded-lg font-medium hover:bg-secondaryGreen hover:scale-105 transition"
              >
                Send message
              </button>
            </form>
          </div>
          {/* Right Section */}
          <div className="bg-primaryGrey h-[135px] p-6 rounded-lg shadow-inner">
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 flex justify-center items-center text-primaryGreen rounded-lg hover:text-secondaryGreen bg-[#303030] transition"
              >
              <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 flex justify-center items-center bg-[#303030] rounded-lg text-primaryGreen hover:text-secondaryGreen  transition"
              >
              <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 flex justify-center items-center bg-[#303030] text-primaryGreen rounded-lg hover:text-secondaryGreen hover:border-primaryGreen transition"
              >
              <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
