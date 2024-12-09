import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white fixed w-full top-0 left-0 z-50">
      {/* Üst Bilgi Bölümü */}
      <div className="bg-customPurple text-white py-2 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2 ps-8">
            <img
              src="/assets/icons/pinIcon.svg"
              alt="Icon navbar 1"
              className="w-4 h-4"
            />
            <span className="text-sm">
              Lorem ipsum has been the industry's standard dummy
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 px-4">
              <img
                src="/assets/icons/phoneIcon.svg"
                alt="Icon navbar 1"
                className="w-4 h-4"
              />
              <span className="text-sm">+90123 45 67</span>
            </div>
            <div className="flex items-center space-x-2 pe-8">
              <img
                src="/assets/icons/mailIcon.svg"
                alt="Icon navbar 1"
                className="w-4 h-4"
              />
              <span className="text-sm">mail@mail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ana Menü */}
      <div className="container mx-auto py-4 px-4 md:px-8 flex justify-between items-center">
        {/* Mobil Menü */}
        <div className="md:hidden flex items-center justify-between w-full">
          <div className="flex items-center space-x-2">
            <div className="bg-[#3A0CA3] text-white text-2xl p-3 rounded-full">
              <img
                src="/assets/icons/14-House.svg"
                alt="Logo icon"
                className="w-6 h-6"
              />
            </div>
            <span className="text-xl font-bold text-customBlack">Logo</span>
          </div>
          <button className="text-customBlack text-2xl focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menü */}
        <ul className="hidden md:flex space-x-6">
          <li className="text-gray-700 font-medium">Home</li>
          <li className="text-gray-700 font-medium">About</li>
          <li className="text-gray-700 font-medium">Listings</li>
          <li className="text-gray-700 font-medium">Services</li>
          <li className="text-gray-700 font-medium">Blogs</li>
        </ul>
        <div className="hidden md:flex items-center space-x-2 text-xl font-bold text-customBlack">
          <div className="bg-[#3A0CA3] text-white text-2xl p-3 rounded-full">
            <img
              src="/assets/icons/14-House.svg"
              alt="Icon navbar 1"
              className="w-6 h-6"
            />
          </div>
          <span>Logo</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-customBlack px-4 py-2 rounded-md flex items-center space-x-2">
            <img
              src="/assets/icons/userIcon.svg"
              alt="Icon navbar 1"
              className="w-5 h-5"
            />
            <span>Login/Register</span>
          </button>
          <button className="bg-customPurple text-white px-6 py-3 rounded-full flex items-center space-x-2">
            <img
              src="/assets/icons/14-House.svg"
              alt="Icon navbar 1"
              className="w-5 h-5"
            />
            <span>Add Listing</span>
          </button>
        </div>
      </div>
    </nav>
  );
}