import React from "react";
import "swiper/css";

export default function TestimonialsSection() {
  return (
    <section className='container mx-auto py-12 px-4 md:px-32 flex flex-col md:flex-row md:space-x-10'>
      {/* Sol Bölüm */}
      <div className='flex flex-col justify-center md:w-1/2 text-left'>
        <h3 className='text-[#4361EE] text-[16px] md:text-[19.4px] tracking-[0.15em] font-medium uppercase mb-2'>
          Testimonials
        </h3>
        <h2 className='text-gray-900 text-2xl md:text-3xl font-bold mb-4'>
          Look What Our <br /> Customers Say!
        </h2>
        <p className='text-gray-600 text-sm md:text-base mb-6'>
          Fusce venenatis tellus a felis scelerisque, <br /> non pulvinar est
          pellentesque.
        </p>
        <div className='hidden md:flex space-x-6 md:space-x-16 mt-4 md:mt-6'>
          <button className='w-10 h-10 flex items-center justify-center border rounded-full border-blue-600 text-blue-600'>
            ←
          </button>
          <button className='w-10 h-10 flex items-center justify-center border rounded-full border-blue-600 text-blue-600'>
            →
          </button>
        </div>
      </div>

      {/* Sağ Bölüm */}
      <div className='flex justify-center md:w-1/2 mt-8 md:mt-0'>
        <div className='bg-white shadow rounded-[20px] md:rounded-[30px] px-6 md:px-8 pb-6 md:pb-8 relative'>
          <div className='absolute -top-5 -left-5 w-14 h-14 bg-blue-100 rounded-full -z-10'></div>

          <blockquote className='text-[#FFC70066] text-6xl md:text-8xl font-bold italic relative'>
            “
          </blockquote>

          <blockquote className='text-gray-700 text-base md:text-xl italic leading-relaxed'>
            Lorem Ipsum has been the industry's{" "}
            <br className='hidden md:block' /> standard dummy text ever since
            the <br className='hidden md:block' /> 1500s, when an unknown
            printer took a <br className='hidden md:block' /> galley of type and
            scrambled it to make
          </blockquote>
          <hr className='mt-4 md:mt-6 mb-4 md:mb-6' />
          <div className='flex items-center'>
            <img
              src='/assets/testimonialsSection/a92971e6075b85d18be0de93205d90cb.jpeg'
              alt='Barbara D. Smith'
              className='w-8 h-8 md:w-10 md:h-10 rounded-full'
            />
            <div className='ml-4'>
              <h4 className='text-gray-900 font-semibold text-sm md:text-base'>
                Barbara D. Smith
              </h4>
              <div className='text-[#FFC700]'>
                ★★★★<span className='text-[#D4D4D4]'>☆</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
