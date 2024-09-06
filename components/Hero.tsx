'use client';

import Image from 'next/image'
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
    lg:py-20 xl:flex-row'>-
    <Image 
    src='/hero-bg-left.png'
    alt='bg-design'
    width={300}
    height={300}
    className='lg:ml-[-7rem] md:ml-[-7.5rem] lg:mt-[30rem] absolute'
    />

<Image 
    src='/hero-bg-left.png'
    alt='bg-design'
    width={250}
    height={80}
    className='lg:ml-[75rem] lg:mt-[35rem] absolute rotate-[180deg] mt-[60rem] md:ml-[35rem] ml-[15rem]'
    />

    {/* Left */}

    <div className='relative z-20 flex flex-1 flex-col justify-start xl:w-[28%]'>
    <div className='bold-52 lg:bold-88 z-20 rotate-[-12deg] w-[150%] font-microsport uppercase flex flex-1 flex-col justify-start items-start mt-[-5rem] xl:ml-[-1rem]
     xl:mt-[-5rem] lg:mt-[-15rem] md:mt-[-15rem] md:ml-[4rem] ml-[5rem] pb-32 md:pb-44'>
    <h2 className='text-[#006837]' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">we are</h2>
    <h1 className='text-[#8bc53e] text-center tracking-[.15em]' data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">JAWAAn</h1>
    <h2 className='text-[#006837]' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Champions</h2>
    </div>
    <div className='my-11 flex flex-wrap items-center gap-5 xl:ml-[-5rem] lg:ml-0'>
    <Image 
        src="/cloud-hero-left.png"
        alt='cloud'
        height={180}
        width={180}
        className='absolute z-10 lg:mt-[-22rem] lg:ml-[-1rem] mt-[-26rem]'
        />

        <Image 
        src="/hero-left.png"
        alt='women-with-football'
        height={300}
        width={300}
        className='z-20' data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        />
        <Image 
        src="/grass-hero-left.png"
        alt='grass'
        height={70}
        width={70}
        className='z-10 absolute lg:mt-[18rem] lg:ml-[0.1rem] mt-[18rem]'
        />

       <Image 
        src="/paint-hero-left.png"
        alt='circles'
        height={300}
        width={300}
        className='z-10 absolute lg:mt-[35rem] lg:ml-[-5rem] mt-[35rem]'
        />
    </div>
    <Image 
        src="/orange-rec-hero-left.png"
        alt='blue-vector'
        height={70}
        width={70}
        className='z-10 absolute lg:mt-[42rem] lg:ml-[8rem] hidden lg:block'
        />
    <Image 
        src="/blue-vector-hero.png"
        alt='blue-vector'
        height={100}
        width={100}
        className='z-10 absolute lg:mt-[35rem] lg:ml-[20rem] hidden lg:block'
        />
         <Image 
        src="/middle-circle-hero.png"
        alt='hero'
        height={150}
        width={150}
        className='z-10 absolute lg:mt-[40rem] lg:ml-[24rem] hidden lg:block'
        />
    </div>
   

    {/* Right */}

    <div className='relative w-full justify-end items-start items-end '>
    <Image 
                src="/hero-right.png"
                alt='man-running'
                height={1500}
                width={1500}
                className='xl:ml-[8rem] lg:ml-[9rem] ml-[1.5rem]' data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
                />
    </div>
    </section>
  )
}

export default Hero
