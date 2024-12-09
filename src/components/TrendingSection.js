import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function TrendingSection  ()  {
  return (
    <section className="bg-[#3A0CA3] text-white py-16">
    <div className="container mx-auto text-left sm:text-center w-[90%] sm:w-[75%]">
      <h2 className="text-l font-light mb-2">WHAT'S TRENDING</h2>
      <h1 className="text-3xl font-bold mb-8 sm:mb-16">Latest Blogs & Posts</h1>
  
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <div className="text-white rounded-lg overflow-hidden justify-self-center text-left">
            <div className="relative">
              <img
                src="/assets/trendingSection/88b09098fae7b1711c657e00f895ec56.jpeg"
                alt="Top 10 Home Buying Mistakes to Avoid"
                className="w-full sm:w-[340px] h-[200px] sm:h-[240px] object-cover rounded-[20px] sm:rounded-[30px]"
              />
              <div className="absolute top-2 left-4 sm:top-1 sm:left-8 bg-white text-white px-2 sm:px-3 py-1 rounded">
                <p className="text-sm font-bold text-black">28</p>
                <p className="text-xs text-black">Tue</p>
              </div>
            </div>
            <div className="pt-4 sm:pt-2">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                Top 10 Home Buying <br /> Mistakes to Avoid
              </h3>
              <p className="text-sm text-[#D4D4D4]">
                Etiam eget elementum elit. <br className="hidden sm:block" />
                Aenean dignissim dapibus vestibulum.
              </p>
            </div>
          </div>
        </SwiperSlide>
  
        <SwiperSlide>
          <div className="text-white rounded-lg overflow-hidden justify-self-center text-left">
            <div className="relative">
              <img
                src="/assets/trendingSection/a278c5cff285826af223565c48925cb1.jpeg"
                alt="How to Stage Your Home for a Quick Sale"
                className="w-full sm:w-[340px] h-[200px] sm:h-[240px] object-cover rounded-[20px] sm:rounded-[30px]"
              />
              <div className="absolute top-2 left-4 sm:top-1 sm:left-8 bg-white text-white px-2 sm:px-3 py-1 rounded">
                <p className="text-sm font-bold text-black">08</p>
                <p className="text-xs text-black">Mon</p>
              </div>
            </div>
            <div className="pt-4 sm:pt-2">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                How to Stage Your <br /> Home for a Quick Sale
              </h3>
              <p className="text-sm text-[#D4D4D4]">
                Nullam odio lacus, dictum quis <br className="hidden sm:block" />
                pretium congue, vehicula venenatis nunc.
              </p>
            </div>
          </div>
        </SwiperSlide>
  
        <SwiperSlide>
          <div className="text-white rounded-lg overflow-hidden justify-self-center text-left">
            <div className="relative">
              <img
                src="/assets/trendingSection/c34df2b6b43d58c90d2ad3d95a5e1b4e.jpeg"
                alt="5 Tips for First-Time Home Sellers"
                className="w-full sm:w-[340px] h-[200px] sm:h-[240px] object-cover rounded-[20px] sm:rounded-[30px]"
              />
              <div className="absolute top-2 left-4 sm:top-1 sm:left-8 bg-white text-white px-2 sm:px-3 py-1 rounded">
                <p className="text-sm font-bold text-black">26</p>
                <p className="text-xs text-black">Wed</p>
              </div>
            </div>
            <div className="pt-4 sm:pt-2">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                5 Tips for First-Time <br /> Home Sellers
              </h3>
              <p className="text-sm text-[#D4D4D4]">
                In hac habitasse platea dictumst. <br className="hidden sm:block" />
                Phasellus vel velit vel augue maximus.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
  
      <div className="flex justify-center items-center lg:space-x-72 xl:space-x-72 mt-8">
        <button className="text-base sm:text-2xl w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] bg-white text-[#3A0CA3] rounded-full">←</button>
        <button className="text-base sm:text-2xl w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] bg-white text-[#3A0CA3] rounded-full ml-4">→</button>
      </div>
    </div>
  </section>
  
  );
};

