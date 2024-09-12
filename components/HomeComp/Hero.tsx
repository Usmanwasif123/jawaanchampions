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
    <section className='hero max-container padding-container flex flex-col justify-between gap-10 py-10 pb-32 md:gap-28 
    lg:py-20 xl:flex-row'>
    <img 
    src='/hero-bg-left.png'
    alt='bg-design'
    width={300}
    height={300}
    className='xl:ml-[-8rem] lg:ml-[-5rem] md:ml-[-7.5rem] lg:mt-[30rem] absolute'
    />

<img 
    src='/hero-bg-left.png'
    alt='bg-design'
    width={250}
    height={80}
    className='lg:ml-[74rem] lg:mt-[35rem] absolute rotate-[180deg] mt-[60rem] md:ml-[35rem] ml-[15rem]'
    />

    {/* Left */}

    <div className='relative z-20 flex flex-1 flex-col justify-start xl:w-[28%]'>
    <div className='bold-18 lg:bold-88 z-20 xl:w-[150%] w-[70%] flex flex-1 flex-col justify-start items-start pb-32 md:pb-44 xl:pb-0'>
    <img 
    src='/we_are.png'
    alt='we_are'
    width={250}
    height={250}
    className=""
    data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
     />
    <img 
    src='/jawaan.png'
    alt='jawaan'
    width={650}
    height={650}
    data-aos="fade-left"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
    className='xl:mt-[-4.5rem] lg:mt-[-5rem] md:mt-[-5rem] mt-[-2rem]'
     />
     <img 
    src='/champions.png'
    alt='champions'
    width={450}
    height={450}
    data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
     className='xl:mt-[-4rem] lg:-[-5rem] md:mt-[-4.5rem] mt-[-2rem]'
     />
     
    <h2 className='text-[#006837] invisible'  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">champions</h2>
     
    </div>
    
    <div className='flex flex-wrap justify-start items-center'>
    <img 
        src="/cloud-hero-left.png"
        alt='cloud'
        height={180}
        width={180}
        className='absolute z-10 lg:mt-[-22rem] lg:ml-[-1rem] mt-[-26rem]'
        />

        <img 
        src="/hero-left.png"
        alt='women-with-football'
        height={300}
        width={300}
        className='z-20' data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        />
        <img 
        src="/grass-hero-left.png"
        alt='grass'
        height={70}
        width={70}
        className='z-10 absolute lg:mt-[18rem] lg:ml-[0.1rem] mt-[18rem]'
        />

       <img 
        src="/paint-hero-left.png"
        alt='circles'
        height={300}
        width={300}
        className='z-10 absolute lg:mt-[35rem] lg:ml-[-5rem] mt-[35rem]'
        />
    </div>
    <img 
        src="/orange-rec-hero-left.png"
        alt='blue-vector'
        height={70}
        width={70}
        className='z-10 absolute lg:mt-[42rem] lg:ml-[8rem] hidden lg:block'
        />
    <img 
        src="/blue-vector-hero.png"
        alt='blue-vector'
        height={100}
        width={100}
        className='z-10 absolute xl:mt-[42rem] xl:ml-[30rem] lg:mt-[42rem] lg:ml-[33rem] md:mt-[42rem] md:ml-[30rem] hidden md:block'
        />
        <img 
        src="/middle-circle-hero.png"
        alt='hero-circle'
        height={150}
        width={150}
        className='z-10 absolute xl:mt-[50rem] xl:ml-[35rem] lg:mt-[50rem] lg:ml-[40rem] md:mt-[50rem] md:ml-[33rem] hidden md:block'
        />
    </div>
   

    {/* Right */}

    <div className='relative w-full justify-end items-end'>
    <img 
                src="/hero-right.png"
                alt='man-running'
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
