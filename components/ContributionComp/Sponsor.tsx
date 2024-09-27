'use client';

import React, { useState, useEffect } from 'react';

const Sponsor = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(0); // Initially set to 1 for mobile
  const sponsors = [
    { imgSrc: '/sponsor-teacher.png', alt: 'sponsor-teacher', text: 'Sponsor A Teacher' },
    { imgSrc: '/sponsor-ground.png', alt: 'sponsor-ground', text: 'Sponsor A Ground' },
    { imgSrc: '/sponsor-traning.png', alt: 'sponsor-traning', text: 'Sponsor A Teacher for Training' },
    { imgSrc: '/sponsor-merch.png', alt: 'sponsor-merch', text: 'Merchandise' }, // Add more slides if needed
    { imgSrc: '/sponsor-school.png', alt: 'sponsor-school', text: 'Sponsor A School' },
    { imgSrc: '/sponsor-kit.png', alt: 'sponsor-kit', text: 'Sponsor An Equipment Kit' },
  ];

  const totalSlides = sponsors.length;

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - slidesToShow : prev - slidesToShow));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + slidesToShow) % totalSlides);
  };

  // Adjust the number of slides to show based on the screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSlidesToShow(3); // Show 3 slides on medium or larger screens
      } else {
        setSlidesToShow(1); // Show 1 slide on mobile
      }
    };

    // Set the initial value based on the current window size
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className='flex flex-col items-center justify-center z-10 mb-10 md:mb-10 lg:mb-20 lg:-mt-28 xl:-mt-52 2xl:-mt-56'>
      <h2 className='lg:text-xl md:text-lg text-2xl xl:text-3xl 2xl:text-4xl text-[#006837] font-semibold font-boogaloo uppercase mb-8'>
        Sponsor a Future
      </h2>

      <div className='container w-1/4 md:w-2/3 lg:w-3/6 2xl:w-2/4 h-[250px]'>
        {/* Image Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-20 lg:gap-16 2xl:gap-40 items-center h-full'>
          {sponsors.slice(currentSlide, currentSlide + slidesToShow).map((sponsor, index) => (
            <div key={index} className='flex flex-col justify-center items-center'>
              <img
                src={sponsor.imgSrc}
                alt={sponsor.alt}
                className='w-full h-full'
              />
              <p className='mt-4 text-center font-semibold font-mont initial lg:text-sm md:text-sm text-[0.55rem] xl:text-md 2xl:text-lg'>{sponsor.text}</p>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className='flex justify-center items-center gap-40 md:gap-[40rem] lg:gap-[50rem] xl:gap-[60rem] 2xl:gap-[65rem] -mt-40 md:-mt-32 lg:-mt-28 w-full '>
          <img
            src='/success-arrow.png'
            alt='success-arrow-prev'
            width={40}
            height={40}
            className='rotate-180 cursor-pointer'
            onClick={prevSlide}
          />
          <img
            src='/success-arrow.png'
            alt='success-arrow-next'
            width={40}
            height={40}
            className='cursor-pointer  z-20'
            onClick={nextSlide}
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
