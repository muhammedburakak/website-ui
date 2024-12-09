import React from "react";

import "swiper/css";

export default function WhoAreWeSection() {
  return (
    <section className='container mx-auto py-8 px-4 md:py-12 md:px-32 flex flex-col md:flex-row md:space-x-10'>
      {/* Sol Bölüm */}
      <div className='flex-1 text-left'>
        <h2 className='text-[#4361EE] text-[16px] md:text-[19.4px] font-medium leading-[24px] md:leading-[29.1px] tracking-[0.15em] mb-2 md:mb-4'>
          WHO ARE WE
        </h2>
        <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6'>
          Assisting individuals in <br /> locating the appropriate <br />
          real estate.
        </h1>
        <p className='text-[#808080] mb-6 md:mb-10 text-sm md:text-base'>
          Lorem Ipsum has been the industry's standard dummy text{" "}
          <br className='hidden md:block' /> ever since the 1500s, when an
          unknown printer took a galley of <br className='hidden md:block' />
          type and scrambled it.
        </p>
        <div class="flex flex-col space-y-4 items-center md:items-start">
  <div class="bg-white shadow-md p-4 md:p-6 rounded-[20px] md:rounded-[30px] w-fit">
    <div class="flex items-center space-x-4">
      <div class="p-2 md:p-4">
        <img src="/assets/icons/icon_smart_home_.png" alt="Icon 2" class="w-8 h-8 md:w-10 md:h-10"/>
      </div>
      <div>
        <h3 class="font-semibold text-[#4361EE] text-sm md:text-base">Lorem ipsum has been the</h3>
        <p class="text-[#808080] font-normal text-xs md:text-sm">
          when an unknown printer took a <br/> galley
        </p>
      </div>
    </div>
  </div>
  <div class="bg-white shadow-md p-4 md:p-6 rounded-[20px] md:rounded-[30px] w-fit">
    <div class="flex items-center space-x-4">
      <div class="p-2 md:p-4">
        <img src="/assets/icons/icon_user_octagon_.png" alt="Icon 1" class="w-8 h-8 md:w-10 md:h-10"/>
      </div>
      <div>
        <h3 class="font-semibold text-[#4361EE] text-sm md:text-base">Lorem ipsum has been the</h3>
        <p class="text-[#808080] font-normal text-xs md:text-sm">
          when an unknown printer took a <br/> galley
        </p>
      </div>
    </div>
  </div>
</div>

      </div>

      {/* Sağ Bölüm */}
      <div className='flex-1 flex flex-col items-center md:items-start md:flex-row md:space-x-6 mt-10 md:mt-0'>
        <div className='w-[280px] h-[500px] rounded-[30px] overflow-hidden self-end'>
          <img
            src='/assets/whoAreWeSection/3c1780f6158b1d62f2036152ec7a594f.jpeg'
            alt='House Image 1'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='flex flex-col space-y-4'>
          <div className='w-[277px] h-[280px] rounded-[30px] overflow-hidden'>
            <img
              src='/assets/whoAreWeSection/8363fc4f62fd9a46cc28eb202059adff.jpeg'
              alt='House Image 2'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='w-[277px] h-[180px] rounded-[30px] overflow-hidden'>
            <img
              src='/assets/whoAreWeSection/8d9d904d15616c6b35ab1d67adea9e75.jpeg'
              alt='House Image 3'
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
