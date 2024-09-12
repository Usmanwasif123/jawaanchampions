'use client'

import React, { useRef, useState, useEffect } from 'react';
import CountUp from 'react-countup';

const Reach = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("IntersectionObserver triggered:", entry.isIntersecting); // For debugging
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.1 } // More sensitive to the element entering the viewport
    );
  
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
 

  return (
    <section
      ref={sectionRef}
      className='flexCenter w-full flex-col md:pb-[100px] pb-0'>
      <h2 className='p-5 lg:text-xl md:text-lg text-2xl xl:text-3xl 2xl:text-4xl text-[#006837] 
        font-semibold font-boogaloo uppercase'
      >Our Reach</h2>
      <div className='flex lg:flex-row flex-col justify-center w-10/12 gap-5 items-center'>
        <div className='flex flex-[1] items-center justify-start lg:pb-[45rem] xl:pb-[6rem] md:pb-[26rem] pb-[27rem]'>
          <img
            src='/women-running-reach.png'
            alt='women-running-reach'
            width={500}
            height={500}
            className='z-40 xl:mt-[-23rem] mt-[0rem] xl:ml-[5rem]' data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            data-aos-offset="0"
          />
          <img
            src='/blue-vector-reach.png'
            alt='blue-vector-reach'
            width={300}
            height={300}
            className='absolute z-30 xl:mt-[-20rem] xl:ml-[9rem] ml-[6rem] mt-[-5rem] hidden sm:block'
          />
          <img
            src='/cloud-reach.png'
            alt='cloud-reach'
            width={600}
            height={600}
            className='absolute z-30 xl:mt-[8rem] xl:ml-[-8rem] ml-[-10rem] mt-[20rem]'
          />
          <img
            src='/jump-stand.png'
            alt='jump-stand'
            width={480}
            height={480}
            className='absolute z-20 xl:mt-[20rem] mt-[30rem] xl:ml-0 ml-[-5rem]'
          />
          <img
            src='/red-circle-reach.png'
            alt='red-circle-reach'
            width={700}
            height={600}
            className='absolute z-10 xl:mt-[35rem] xl:ml-[-8rem] lg:ml-[-15rem] mt-[45rem] ml-[-8rem]'
          />
          <img
            src='/green-strike-reach.png'
            alt='green-strike-reach'
            width={800}
            height={500}
            className='absolute z-10 xl:mt-[50rem] xl:ml-[-8rem] lg:mt-[75rem] mt-[55rem] ml-[-8rem]'
          />
        </div>
        <div className='z-20 flex-[1] grid grid-cols-2 grid-rows-7 items-center justify-center gap-5 md:gap-12 text-center md:p-5 lg:p-0  h-11/12'>
          <h2 className='bold-40 lg:bold-64 text-center font-microsport uppercase text-[#b43434] lg:ml-[-5rem] ml-[-3rem]'>
            {startCount && <CountUp end={82737} duration={3} />}
          </h2>
          <p className='regular-16 lg:regular-24 text-black text-center font-bold uppercase'>Total number of students</p>
          <h2 className='bold-40 lg:bold-64 text-center font-microsport uppercase text-[#00c6a1]'>
            {startCount && <CountUp end={475} duration={3} />}
          </h2>
          <p className='regular-16 lg:regular-24 text-black text-center font-bold uppercase'>
            Total number of teachers
          </p>
          <h2 className='bold-40 lg:bold-64  text-center font-microsport uppercase text-[#fd682a] '>
            {startCount && <CountUp end={233} duration={3} />}
          </h2>
          <p className='regular-16 lg:regular-24 text-black text-center font-bold uppercase'>
            Total number of schools
          </p>
          <h2 className='bold-40 lg:bold-64  text-center font-microsport uppercase text-[#002861] '>
            {startCount && <CountUp end={209} duration={3} />}
          </h2>
          <p className='regular-16 lg:regular-24 text-black text-center font-bold uppercase'>
            Total number of schools with no resources
          </p>
          <h2 className='bold-40 lg:bold-64 text-center font-microsport uppercase text-[#ffa21e] '>
            {startCount && <CountUp end={2} duration={3} />}
          </h2>
          <p className='regular-16 lg:regular-24 text-black text-center font-bold uppercase'>Total number of madrassas</p>
          <h2 className='bold-40 lg:bold-64 text-center font-microsport uppercase text-[#00c6a1] '>
            {startCount && <CountUp end={2} duration={3} />}
          </h2>
          <p className='regular-16 lg:regular-24 text-black text-center font-bold uppercase'>
            Rehabilitation centres
          </p>
        </div>
        </div>
    </section>
  );
};

export default Reach;
