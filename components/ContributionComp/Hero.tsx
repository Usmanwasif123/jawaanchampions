'use client';

import React from 'react'
import { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
const AOS = require('aos');

const Hero = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // You can add global AOS options here if needed
    });

    // Cleanup function to refresh AOS when the component unmounts or updates
    return () => {
      AOS.refresh(); // Refresh AOS to clean up animations
    };
  }, []);

  return (
    <section className='hero max-container padding-container flex flex-col justify-between gap-10 py-20 pb-32 md:gap-28 
    lg:py-20 xl:flex-row md:mb-14 lg:mb-0 xl:mb-10 2xl:mb-20'>
    <img 
    src='/hero-bg-left.png'
    alt='bg-design'
    width={300}
    height={300}
    className='xl:ml-[-8rem] lg:ml-[-5rem] md:ml-[-7.5rem] lg:mt-[30rem] absolute hidden md:block'
    />

<img 
    src='/hero-bg-left.png'
    alt='bg-design'
    width={250}
    height={80}
    className='lg:ml-[74rem] lg:mt-[35rem] absolute rotate-[180deg] mt-[60rem] md:ml-[35rem] ml-[15rem] hidden md:block'
    />

    {/* Left */}

    <div className='relative z-20 flex flex-1 flex-col justify-start xl:w-[28%]'>
    <div className='bold-18 lg:bold-88 z-20 xl:w-[150%] w-[70%] flex flex-1 flex-col justify-start items-start pb-5 md:pb-44 xl:pb-0'>
    <img 
    src='/become.png'
    alt='become'
    width={250}
    height={250}
    className="xl:ml-[7rem]"
    data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
     />
    <img 
    src='/champion.png'
    alt='champion'
    width={650}
    height={650}
    data-aos="fade-left"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
    className='xl:mt-[1rem] xl:ml-[7rem] lg:mt-[0rem] md:mt-[0rem] mt-[0rem]'
     />
     <img 
    src='/empower.png'
    alt='empower'
    width={450}
    height={450}
    data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
     className='xl:mt-[1rem] xl:ml-[7rem] lg:-[-5rem] md:mt-[0rem] mt-[1rem]'
     />
     
    <h2 className='text-[#006837] invisible'  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">champions</h2>
     
    </div>
    
    <div className='flex flex-wrap justify-start items-center'>

    <img 
        src="/green-circle-left-hero.png"
        alt='green-circle-left-hero'
        height={130}
        width={130}
        className='z-10 absolute xl:mt-[1rem] xl:ml-[-9rem] lg:ml-[-5rem] hidden lg:block'
        />

        <img 
        src="/paint-hero-left.png"
        alt='circles'
        height={300}
        width={300}
        className='z-0 absolute xl:mt-[-10rem] xl:ml-[-7rem] rotate-[180deg] hidden md:block'
        />
    </div>
        <img 
        src="/ball-hero-contribution.png"
        alt='ball-hero-contribution'
        height={120}
        width={120}
        className='z-10 absolute xl:mt-[17rem] xl:ml-[25rem] lg:mt-[47rem] lg:ml-[8rem] md:mt-[40rem] md:ml-[0rem] hidden md:block'
        />
        <div className='absolute top-[23rem] left-[-4.5rem] xl:top-[27rem] xl:left-[20rem] lg:top-[65rem] md:top-[65rem] top-[23rem] left-[-4.5rem] p-16 w-full md:w-[40rem] text-center font-medium font-mont'>
        <p className='mb-5 lg:text-sm md:text-xs text-xs xl:text-md 2xl:text-lg'>
        In the heart of developing countries, children face formidable challenges-violence, limited opportunities, gender inequality, climate change, illiteracy, and poverty. Yet, within these young hearts lies the potential for greatness.   
        </p>
        <h2 className='mb-5 font-semibold text-[#006837] lg:text-md md:text-sm text-xs xl:text-lg 2xl:text-xl'>
        At Jawaan Champions, we harness the universal language of sports to break down these barriers and unleash that potential
        </h2>
        <p className='lg:text-sm md:text-xs text-xs xl:text-md 2xl:text-lg'>
          <span className='text-[#006837] font-semibold'>In just 40 minutes, </span>
          each child becomes an active participant in their own transformation, gaining invaluable life skills, unshakeable confidence, & a resilient spirit.
        </p>
        </div>
    </div>
    
   

    {/* Right */}

    <div className='relative w-full justify-end items-end'>
    <img 
                src="/men-hero-contribution.png"
                alt='men-hero-contribution'
                height={1500}
                width={1500}
                className='xl:ml-[7.5rem] lg:ml-[9rem] ml-[1.4rem]' data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
                />
    </div>
    </section>
  )
}

export default Hero
