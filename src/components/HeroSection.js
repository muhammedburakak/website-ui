import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { GiSettingsKnobs } from "react-icons/gi";

export default function HeroSection() {
  return (
    <>
      <section className='bg-gradient-to-b from-[#4CC9F000] to-[#4361EE4D] w-full lg:w-[1440px] lg:h-[902px] top-[40px] rounded-bl-[800px] rounded-br-[800px] border-b border-solid border-opacity-0 mx-auto content-center relative mt-16'>
        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-items-center px-4'>
          <div className='space-y-6 lg:ml-10 text-left'>
            <div className='text-left'>
              <h2 className='text-[#4361EE] mb-6 text-[19.4px] font-medium leading-[29.1px] tracking-[0.15em]'>
                REAL ESTATE
              </h2>
              <h1 className='text-4xl lg:text-5xl font-bold text-gray-800 mb-4'>
                Find a perfect
                <br /> home you love..!
              </h1>
              <p className='text-[#808080] mb-4'>
                Lorem ipsum has been the industry's{" "}
                <span className='block lg:hidden'></span> standard dummy text
                ever since <br className='hidden lg:block' /> the 1500s, when an
                unknown printer took a galley.
              </p>
            </div>
            <Swiper
              loop
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                stopOnLastSlide: false,
              }}
              className='w-[333px] h-[210px] lg:w-[580px] lg:h-[351px]'
            >
              <SwiperSlide>
                <img
                  src='/assets/heroSection/c0db865f789961bb3e28500f19c35c4e.jpeg'
                  alt='Slider 1'
                  className='rounded-[20px] shadow-md w-[333px] h-[210px] lg:w-full lg:h-full object-cover'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='/assets/newListings/6f10e2ba54bd37775334c989afaf4fbd.jpeg'
                  alt='Slider 2'
                  className='rounded-[20px] shadow-md w-[333px] h-[210px] lg:w-full lg:h-full object-cover'
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className='bg-white shadow-[10px_30px_50px_0px_#0000000D] rounded-[30px] w-full lg:w-[420px] h-auto lg:h-[582px]'>
            <div className='flex px-10 mt-10'>
              <button className='flex-1 border-b-2 border-customPurple text-customPurple pb-2 font-medium'>
                For Sale
              </button>
              <button className='flex-1 border-b-2 border-transparent text-gray-600 pb-2 font-medium'>
                For Rent
              </button>
            </div>

            <div className='space-y-6 pb-8 px-8  h-full content-center border-t border-solid border-[#AAAAAA]'>
              <input
                type='text'
                placeholder='New York, San Francisco, etc.'
                className='w-full h-[50px] px-4 py-2 bg-[#D4D4D433] text-[#AAAAAA] placeholder-[#AAAAAA]  rounded-[20px] focus:outline-none focus:ring focus:border-customPurple'
              />
              <select
                disabled
                className='w-full h-[50px]  px-4 py-2 bg-[#D4D4D433] text-[#AAAAAA] placeholder-[#AAAAAA] rounded-[20px] focus:outline-none focus:ring focus:border-customPurple'
              >
                <option>Select Property Type</option>
              </select>

              <select
                disabled
                className='w-full h-[50px] mb-6 px-4 py-2 bg-[#D4D4D433] text-[#AAAAAA] placeholder-[#AAAAAA] rounded-[20px] focus:outline-none focus:ring focus:border-customPurple'
              >
                <option className='text-[#AAAAAA]'>Select Rooms</option>
              </select>

              <div className='w-[340px] h-[59px] place-self-center'>
                <button className='flex items-center justify-start text-customPurple  space-x-1'>
                  <GiSettingsKnobs />
                  <span>Advance Search</span>
                </button>
              </div>

              <button className='m-auto bg-[#3A0CA3] w-[340px] h-[60px] text-white rounded-full flex items-center justify-center space-x-2 border border-solid border-[#BFBDC1] hover:bg-purple-700 transition duration-300'>
                <img
                  src='/assets/icons/searchIcon.svg'
                  alt='Icon search 1'
                  className='w-5 h-5'
                />
                <span className='leading-none'>Search</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className='container mx-auto pb-12 flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-20 justify-center mt-16 sm:-mt-8'>
        <div className='bg-white w-full lg:w-[360px] h-[100px] flex items-center shadow-[10px_30px_50px_0px_#0000000D] space-x-4 rounded-[50px] content-center z-20 px-4'>
          <div className='flex -space-x-4'>
            <img
              src='/assets/happyCustomers/73c9d90580bb79622bfa4c078cce65e1.jpeg'
              alt='Customer Icon 3'
              className='w-10 h-10 rounded-full border-2 border-white'
            />
            <img
              src='/assets/happyCustomers/40086bea725a6e74d534e7d86d48d755.jpeg'
              alt='Customer Icon 4'
              className='w-10 h-10 rounded-full border-2 border-white'
            />
            <img
              src='/assets/happyCustomers/555841b292ec352442cdcc50c8c80584.jpeg'
              alt='Customer Icon 5'
              className='w-10 h-10 rounded-full border-2 border-white'
            />
            <img
              src='/assets/happyCustomers/1b25ee1372c134a5a04c9f4e466a960d.jpeg'
              alt='Customer Icon 1'
              className='w-10 h-10 rounded-full border-2 border-white'
            />
            <img
              src='/assets/happyCustomers/2fb3451f2790627112ebba6732cb7a49.jpeg'
              alt='Customer Icon 2'
              className='w-10 h-10 rounded-full border-2 border-white'
            />
            <div className='w-10 h-10 rounded-full border-2 text-l bg-black text-center place-content-center text-white border-white'>
              +
            </div>
          </div>
          <div className='text-lg font-semibold text-gray-800'>
            72k+ Happy <br /> Customers
          </div>
        </div>

        <div className='bg-white w-full lg:w-[360px] h-[100px] flex items-center shadow-[10px_30px_50px_0px_#0000000D] space-x-4 rounded-[50px] content-center justify-center z-20 px-4'>
          <img
            src='/assets/newListings/6f10e2ba54bd37775334c989afaf4fbd.jpeg'
            alt='Listing Icons'
            className='w-[60px] h-[60px] rounded-full border-2 border-white'
          />
          <div className='text-lg font-semibold text-gray-800'>
            200+ New <br /> Listings Everyday!
          </div>
        </div>
      </section>
    </>
  );
}
