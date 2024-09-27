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
    <section className='hero max-container padding-container flex flex-col justify-between gap-10 py-10 pb-32 md:pb-10 md:gap-28 
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
    <div className='bold-18 lg:bold-88 z-20 xl:w-[150%] w-[70%] flex flex-1 flex-col justify-start items-start pb-2 md:pb-44 xl:pb-0'>
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

    {/* Right */}

    <div className='relative w-full justify-end items-end lg:hidden block'>
    <img 
                src="/hero-right.png"
                alt='man-running'
                className='xl:ml-[7.5rem] lg:ml-[9rem] ml-[6rem] w-10/12 h-10/12' data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
                />
    </div>
    
    <div className='flex justify-start items-center w-9/12 h-9/12 lg:w-full lg:h-full'>
    <img 
        src="/cloud-hero-left.png"
        alt='cloud'
        height={120}
        width={120}
        className='absolute z-10 lg:mt-[-22rem] lg:ml-[-1rem] mt-[-20rem]'
        />

        <img 
        src="/hero-left.png"
        alt='women-with-football'
        className='z-20 w-9/12 h-9/12 lg:w-full lg:h-full' data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        />
        <img 
        src="/grass-hero-left.png"
        alt='grass'
        height={50}
        width={50}
        className='z-10 absolute lg:mt-[18rem] lg:ml-[0.1rem] mt-[10rem]'
        />

       <img 
        src="/paint-hero-left.png"
        alt='circles'
        height={100}
        width={100}
        className='z-10 absolute lg:mt-[35rem] lg:ml-[-5rem] mt-[20rem]'
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
        id='vector'
        className='z-10 absolute xl:mt-[42rem] xl:ml-[30rem] lg:mt-[42rem] lg:ml-[33rem] md:mt-[42rem] md:ml-[30rem] ml-56 mt-[45rem]'
        />
        <img 
        src="/middle-circle-hero.png"
        alt='hero-circle'
        height={150}
        width={150}
        id='circle'
        className='z-10 absolute xl:mt-[50rem] xl:ml-[35rem] lg:mt-[50rem] lg:ml-[40rem] md:mt-[50rem] md:ml-[33rem] ml-60 mt-[50rem]'
        />
    </div>
   

    {/* Right */}

    <div className='relative w-full justify-end items-end hidden lg:block'>
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
    <style jsx>{`
        #circle {
          margin-top: 33rem;
        }
        @media (min-width: 375px) {
          #circle {
            margin-top: 40rem;
        }
        }
        @media (min-width: 425px) {
          #circle {
            margin-top: 45rem;
        }
        }
        @media (min-width: 768px) {
          #circle {
             margin-top: 90rem;/* For larger screens like tablets */
          }
        }
        @media (min-width: 1024px) {
          #circle {
             margin-top: 100rem;/* For desktops */
          }
        }
         @media (min-width: 1280px) {
          #circle {
             margin-top: 55rem; /* For large desktops */
          }
         @media (min-width: 2560px) {
          #circle {
            margin-top: 55rem;/* For large desktops */
          }
            `}</style>
            <style jsx>{`
        #vector {
          margin-top: 30rem;
        }
        @media (min-width: 375px) {
          #vector {
            margin-top: 37rem;
        }
        }
         @media (min-width: 425px) {
          #vector {
            margin-top: 43rem;
        }
        }
        @media (min-width: 768px) {
          #vector {
             margin-top: 88rem; /* For larger screens like tablets */
          }
        }
        @media (min-width: 1024px) {
          #vector {
             margin-top: 95rem; /* For desktops */
          }
        }
         @media (min-width: 1280px) {
          #vector {
             margin-top: 53rem; /* For large desktops */
          }
         @media (min-width: 2560px) {
          #vector {
            margin-top: 53rem;/* For large desktops */
          }
            `}</style>
    </section>
  )
}

export default Hero
