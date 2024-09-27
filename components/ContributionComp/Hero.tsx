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
    <section className='hero w-full max-container padding-container flex flex-col justify-between gap-1 xl:flex-row'>
    <img 
    src='/hero-bg-left.png'
    alt='bg-design'
    width={200}
    height={200}
    className='xl:ml-[-8rem] lg:ml-[-5rem] md:ml-[-7.5rem] lg:mt-[40rem] absolute hidden md:block'
    />

<img 
    src='/hero-bg-left.png'
    alt='bg-design'
    width={250}
    height={80}
    className='lg:ml-[74rem] lg:mt-[35rem] absolute rotate-[180deg] mt-[60rem] md:ml-[35rem] ml-[15rem] hidden md:block'
    />

    {/* Left */}

    <div className='relative z-20 flex flex-1 flex-col justify-start xl:w-[28%] p-5'>
    <div className='bold-18 lg:bold-88 z-20 xl:w-[150%] w-[70%] flex flex-1 flex-col justify-start items-start pb-0 md:pb-44 xl:pb-0'>
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
      data-aos-duration="2000"
    data-aos-easing="ease-in-sine"
    className='xl:mt-[1rem] xl:ml-[7rem] lg:mt-[0rem] md:mt-[0rem] mt-[0rem]'
     />
     <img 
    src='/empower.png'
    alt='empower'
    width={450}
    height={450}
    data-aos="fade-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
     className='xl:mt-[1rem] xl:ml-[7rem] lg:-[-5rem] md:mt-[0rem] mt-[0rem]'
     />
     
    <h2 className='text-[#006837] invisible'  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">champions</h2>
     
    </div>
    <img 
        src="/green-circle-left-hero.png"
        alt='green-circle-left-hero'
        height={130}
        width={130}
        className='z-10 absolute md:mt-[35rem] md:-ml-20 lg:mt-[20rem] lg:ml-[-8rem] xl:mt-[16rem] xl:ml-[-9rem] lg:ml-[-5rem] 2xl:mt-[20rem] hidden md:block'
        />

        <img 
        src="/paint-hero-left.png"
        alt='circles'
        height={200}
        width={200}
        className='z-0 absolute md:mt-[33rem] md:-ml-20 lg:mt-[20rem] lg:ml-[-8rem] xl:mt-[15rem] xl:ml-[-9rem] 2xl:mt-[19rem] rotate-[180deg] hidden md:block'
        />

        {/* Right */}

    <div className='relative w-full justify-end items-end xl:hidden block'>
    <img 
                src="/men-hero-contribution.png"
                alt='men-hero-contribution'
                className='xl:ml-[7.5rem] md:mt-[-10rem] lg:mt-[-15rem] lg:ml-[9rem] ml-[3rem] w-full h-full' data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
                />
    </div>
    
    <div className='flex flex-wrap justify-center lg:pr-20 items-center w-screen lg:-mt-40'>
    <div className='flex flex-row justify-start items-start lg:w-8/12 lg:h-8/12 xl:w-5/12 xl:h-5/12  lg:pr-96 md:pr-[40rem] pr-[19rem]'>
        <img 
        src="/ball-hero-contribution.png"
        alt='ball-hero-contribution'
        className='z-10 2xl:ml-[-5rem] 2xl:mt-[-3rem] xl:mt-[-1rem] xl:-ml-10 lg:-mt-60 lg:-ml-28 md:-mt-[30rem] -mt-36 lg:w-3/6 lg:h-3/6 xl:w-3/6 xl:h-3/6 2xl:w-3/6 2xl:h-3/6 w-3/6 h-3/6'
        />
        </div>
    </div>
        <div className='flex flex-col justify-center items-center gap-5 md:gap-5 2xl:gap-10 -mt-6 md:-mt-20 md:-ml-11 lg:-mt-[5rem] lg:-ml-28 xl:-ml-[5rem] xl:mt-[-15rem] 2xl:mt-[-14rem] 2xl:-ml-[10rem] w-full md:h-[1%] lg:h-[1%] xl:h-[1%] 2xl:h-[1%] md:w-screen md:p-16 lg:p-40 xl:p-[27rem] 2xl:p-[26rem] text-center font-medium font-mont'>
        <p className='lg:text-sm md:text-xs text-xs xl:text-md 2xl:text-lg'>
        In the heart of developing countries, children face formidable challenges-violence, limited opportunities, gender inequality, climate change, illiteracy, and poverty. Yet, within these young hearts lies the potential for greatness.   
        </p>
        <h2 className='font-semibold text-[#006837] lg:text-md md:text-sm text-xs xl:text-lg 2xl:text-xl'>
        At Jawaan Champions, we harness the universal language of sports to break down these barriers and unleash that potential
        </h2>
        <p className='lg:text-sm md:text-xs text-xs xl:text-md 2xl:text-lg'>
          <span className='text-[#006837] font-semibold'>In just 40 minutes, </span>
          each child becomes an active participant in their own transformation, gaining invaluable life skills, unshakeable confidence, & a resilient spirit.
        </p>
        </div>
    </div>
    
   

    {/* Right */}

    <div className='relative w-full h-[50%] justify-start items-start hidden xl:block'>
    <img 
                src="/men-hero-contribution.png"
                alt='men-hero-contribution'
                className='2xl:ml-[7.5rem] xl:ml-[7rem] lg:ml-[9rem] ml-[1.4rem] w-full h-full' data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
                />
    </div>
    </section>
  )
}

export default Hero
