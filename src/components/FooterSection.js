import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className='pt-12 bg-[#EBEFFC]'>
      <div className='container mx-auto px-6 md:px-20 lg:px-32 flex flex-col md:flex-row md:space-x-10'>
        <div className='flex-1 mb-10 md:mb-0 text-center md:text-left'>
          <div className='flex items-center justify-center md:justify-start space-x-3'>
            <div className='bg-[#3A0CA3] text-white text-2xl p-3 rounded-full'>
              <img
                src='/assets/icons/14-House.svg'
                alt='Icon Footer 1'
                className='w-5 h-5'
              />
            </div>
            <h2 className='text-xl font-semibold text-gray-800'>Rezilla</h2>
          </div>
          <p className='text-[#2B2B2B] mt-4 font-medium'>
            Lorem ipsum has been the industry standard dummy text
          </p>
          <div className='mt-6 space-y-2'>
            <div className='flex items-center justify-center md:justify-start space-x-3'>
              <img
                src='/assets/icons/phoneIconBlack.svg'
                alt='Icon navbar 1'
                className='w-5 h-5'
              />
              <span className='text-gray-800'>+90123 45 67</span>
            </div>
            <div className='flex items-center justify-center md:justify-start space-x-3 pt-3'>
              <img
                src='/assets/icons/mailIconBlack.svg'
                alt='Icon navbar 1'
                className='w-5 h-5'
              />
              <span className='text-gray-800'>mail@mail.com</span>
            </div>
          </div>
        </div>

        <div className='flex-1 mb-10 md:mb-0 hidden md:block'>
          <h3 className='font-medium text-xl text-gray-800'>Quick Links</h3>
          <ul className='mt-4 space-y-2 text-[#2B2B2B] font-normal'>
            <li>Home</li>
            <li>About</li>
            <li>Listings</li>
            <li>Services</li>
            <li>Blogs</li>
            <li>Become an Agent</li>
          </ul>
        </div>

        <div className='flex-1 mb-10 md:mb-0 hidden md:block'>
          <h3 className='font-medium text-xl text-gray-800'>Discovery</h3>
          <ul className='mt-4 space-y-2 text-[#2B2B2B] font-normal'>
            <li>Canada</li>
            <li>United States</li>
            <li>Germany</li>
            <li>Africa</li>
            <li>India</li>
          </ul>
        </div>

        <div className='flex-1 text-center md:text-left'>
          <h3 className='font-semibold text-gray-800'>
            Subscribe to our <br /> Newsletter!
          </h3>
          <div className='mt-4 flex items-center justify-center md:justify-start relative'>
            <input
              type='text'
              placeholder='Email Address'
              className='flex-1 py-4 px-4 border border-gray-300 rounded-[30px] focus:outline-none '
            />
            <button className='bg-[#3A0CA3] text-2xl rounded-full text-white w-[50px] h-[50px] absolute right-2'>
              &rarr;
            </button>
          </div>
          <div className='mt-6'>
            <h4 className='font-semibold text-gray-800'>Follow Us on</h4>
            <div className='flex justify-center md:justify-start space-x-4 mt-5'>
              <a
                href='https://www.linkedin.com/company/baykar'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[#3A0CA3] text-2xl'
              >
                <FaLinkedinIn />
              </a>
              <a
                href='https://www.facebook.com/BaykarTech/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[#3A0CA3] text-2xl'
              >
                <FaFacebookF />
              </a>
              <a
                href='https://www.instagram.com/baykartech'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[#3A0CA3] text-2xl'
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#0B090A] text-[#AAAAAA] mt-16 py-2'>
        <div className='container mx-auto flex  justify-between items-center'>
          <div className='flex items-center space-x-4 ps-28'>
            <span className='text-sm'>© Company – All rights reserved</span>
          </div>
          <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 hidden md:flex'>
            <div className='flex items-center space-x-2 px-4'>
              <span className='text-sm'>Terms and Conditions</span>
            </div>
            <div className='flex items-center space-x-2 px-4'>
              <span className='text-sm'>Privacy Policy</span>
            </div>

            <div className='flex items-center space-x-2 pe-28'>
              <span className='text-sm'>Disclaimer</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
