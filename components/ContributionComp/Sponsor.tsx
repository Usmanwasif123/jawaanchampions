'use client';

import React, { useState } from 'react';

const Sponsor = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const length = 3; // Assuming there are 3 slides

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  return (
    <section className='flex flex-col items-center justify-center z-10 mt-[25rem] md:mt-0 mb-24 md:mb-0'>
      <h2 className='text-2xl lg:text-3xl xl:text-4xl text-[#006837] font-semibold font-boogaloo uppercase mb-8'>
        Sponsor a Future
      </h2>
      
      <div className='container mx-auto w-full md:w-3/4 h-[250px] md:h-[180px]'>
        {/* Image Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center h-full'>
  {/* Slide 1 */}
  <div className='flex flex-col justify-center items-center regular-12 lg:regular-16 font-semibold font-mont'>
    <img
      src='/sponsor-teacher.png'
      alt='sponsor-teacher'
      className='w-24 h-24 md:w-32 md:h-32'
    />
    <p className='mt-4 text-center font-semibold'>Sponsor A Teacher</p>
  </div>
  {/* Slide 2 */}
  <div className='flex flex-col justify-center items-center regular-12 lg:regular-16 font-semibold font-mont'>
    <img
      src='/sponsor-ground.png'
      alt='sponsor-ground'
      className='w-24 h-24 md:w-32 md:h-32'
    />
    <p className='mt-4 text-center font-semibold'>Sponsor A Ground</p>
  </div>
  {/* Slide 3 */}
  <div className='flex flex-col justify-center items-center regular-12 lg:regular-16 font-semibold font-mont'>
    <img
      src='/sponsor-traning.png'
      alt='sponsor-traning'
      className='w-24 h-24 md:w-32 md:h-32'
    />
    <p className='mt-4 text-center font-semibold'>Sponsor A Teacher for Training</p>
  </div>
</div>


        {/* Navigation Arrows - Centered below the grid */}
        <div className='flex justify-between items-center -mt-20 w-full'>
          <img
            src='/success-arrow.png'
            alt='success-arrow-prev'
            width={40}
            height={40}
            className='rotate-180 cursor-pointer mx-4 md:-mx-6'
            onClick={prevSlide}
          />
          <img
            src='/success-arrow.png'
            alt='success-arrow-next'
            width={40}
            height={40}
            className='cursor-pointer mx-4 md:-mx-6'
            onClick={nextSlide}
          />
        </div>
      </div>
    </section>
  );
}

export default Sponsor;
