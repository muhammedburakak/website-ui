import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaBed, FaBath, FaFire, FaTag, FaStar } from "react-icons/fa";

export default function CheckoutSection ()  {
  const properties = [
    {
      id: 1,
      image: "/assets/checkoutSection/c29a6fdfc56f1281691b64cd6d326273.jpeg",
      price: "$5,970",
      title: "Tranquil Haven in the Woods",
      location: "103 Wright Court, Burien, WA 98168",
      beds: 4,
      baths: 3,
      tag: {
        text: "Popular",
        color: "text-red-600",
        icon: <FaFire />,
      },
    },
    {
      id: 2,
      image: "/assets/checkoutSection/7048af1a1292dbac7c45b5c9014a1e82.jpeg",
      price: "$1,970",
      title: "Serene Retreat by the Lake",
      location: "1964 Jehovah Drive, VA 22408",
      beds: 3,
      baths: 2,
      tag: {
        text: "New Listing",
        color: "text-blue-600",
        icon: <FaTag />,
      },
    },
    {
      id: 3,
      image: "/assets/checkoutSection/0b400da94167cf8762b5195d14d33edf.jpeg",
      price: "$3,450",
      title: "Charming Cottage in the Meadow",
      location: "1508 Centennial Farm Road, Harlan, 51537",
      beds: 4,
      baths: 4,
      tag: {
        text: "Discounted Price",
        color: "text-green-600",
        icon: <FaStar />,
      },
    },
    {
      id: 4,
      image: "/assets/checkoutSection/ee559e82e9cffdd11e1005362ee567b1.jpeg",
      price: "$2,389",
      title: "Grand Estate on the Hilltop",
      location: "103 Wright CourtBurien, WA 98168",
      beds: 4,
      baths: 3,
      tag: {
        text: "Popular",
        color: "text-red-600",
        icon: <FaFire />,
      },
    },
    {
      id: 5,
      image: "/assets/checkoutSection/c29a6fdfc56f1281691b64cd6d326273.jpeg",
      price: "$5,970",
      title: "Tranquil Haven in the Woods",
      location: "103 Wright Court, Burien, WA 98168",
      beds: 4,
      baths: 3,
      tag: {
        text: "Popular",
        color: "text-red-600",
        icon: <FaFire />,
      },
    },
  ];

  return (
    <section className='container mx-auto py-12 px-4 md:px-32 relative'>
    <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-8'>
      <div className='text-left'>
        <h2 className='text-[#4361EE] font-poppins text-[16px] md:text-[19.4px] font-medium leading-[24px] md:leading-[29.1px] tracking-[0.15em] mb-2 md:mb-4'>
          CHECKOUT OUR NEW
        </h2>
  
        <h2 className='text-3xl md:text-4xl font-semibold text-gray-800 mb-4'>
          Latest Listed Properties
        </h2>
        
        <p className='text-sm md:text-base text-gray-500'>
          Donec porttitor euismod dignissim. Nullam a lacinia ipsum,
          <br className='hidden md:block' />
          nec dignissim purus.
        </p>
      </div>
      <div className='flex space-x-4 mt-4 md:mt-0'>
        <button className='px-8 py-4 border border-[#3A0CA3] rounded-full text-sm md:text-base font-medium text-gray-600 hover:bg-gray-100'>
          All
        </button>
        <button className='px-8 py-4 border border-[#3A0CA3] rounded-full text-sm md:text-base font-medium text-white bg-[#3A0CA3]'>
          Sell
        </button>
        <button className='px-8 py-4 border border-[#3A0CA3] rounded-full text-sm md:text-base font-medium text-gray-600 hover:bg-gray-100'>
          Rent
        </button>
      </div>
    </div>
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: 2.5 },
        1024: { slidesPerView: 3.5 },
      }}
      className='flex items-center'
    >
      {properties.map((property) => (
        <SwiperSlide key={property.id}>
          <div className='bg-white rounded-3xl overflow-hidden shadow-md'>
            <div className='relative'>
              <img
                src={property.image}
                alt={property.title}
                className='w-full sm:w-[340px] sm:h-[340px] object-cover rounded-[20px] sm:rounded-[30px]'
              />
  
              <div className={`absolute bottom-4 left-4 flex items-center space-x-2 bg-white px-4 py-2 rounded-full ${property.tag.color}`}>
                <span className={`text-sm font-medium ${property.tag.color}`}>
                  {property.tag.icon}
                </span>
                <span className={`text-sm font-medium ${property.tag.b}`}>
                  {property.tag.text}
                </span>
              </div>
            </div>
  
            <div className='p-4'>
              <h3 className='text-xl sm:text-2xl font-semibold text-gray-800 mt-4'>
                {property.price}
              </h3>
              <p className='text-base sm:text-lg text-gray-600'>{property.title}</p>
              <p className='text-sm sm:text-base text-gray-400'>{property.location}</p>
              <div className='flex items-center space-x-4 mt-4 text-gray-600'>
                <div className='flex items-center space-x-1'>
                  <FaBed />
                  <span>{property.beds} Beds</span>
                </div>
                <div className='flex items-center space-x-1'>
                  <FaBath />
                  <span>{property.baths} Bath</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <div className='absolute -bottom-10 right-40 w-14 h-14 bg-blue-100 rounded-full -z-10'></div>
  </section>
  
  );
};


