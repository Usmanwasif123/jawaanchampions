'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

const storiesData = [
  {
    title: 'Rounders on Blackboard: Overcoming Limitations with Creativity',
    description: "In a school without outdoor space, a group of students refused to give up their love for rounders, a modified sport introduced by Jawaan Champions.",
    image: '/story1.png',
    url: '/success-stories',
  },
  {
    title: 'Active School, Raised Admissions: Transforming Education and Community',
    description: "When St. Jude’s High School in North Nazimabad first partnered with Jawaan Champions, their primary goal was to improve their students’ health and well-being.",
    image: '/story2.png',
    url: '/success-stories',
  },
  {
    title: 'Empowerment Through Physical Activity: A Teacher’s Impact',
    description: "Mr. Ali, a school teacher, faced challenges in engaging his students in physical activity due to limited resources.",
    image: '/story3.png',
    url: '/success-stories',
  },
  {
    title: 'Faith and Passion: Breaking Barriers in Sports',
    description: "For years, sports had been a boys' domain in many Pakistani schools and the girls have often found themselves limited to the sidelines with their potential untapped.",
    image: '/story4.png',
    url: '/success-stories',
  },
];

const Stories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false); // Ensure it's client-side before using router
  const router = useRouter();

  useEffect(() => {
    // This ensures we are in a browser environment
    setIsClient(true);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? storiesData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === storiesData.length - 1 ? 0 : prev + 1));
  };

  const handleReadMore = (url: string) => {
    if (isClient) {
      router.push(url); // Use the router to navigate
    }
  };

  return (
    <section className="flexCenter flex-col lg:pr-0 lg:pl-0 pr-3 pl-3 relative pb-5 md:pb-10">
      <h2 className="lg:text-xl md:text-lg text-2xl xl:text-3xl 2xl:text-4xl text-[#006837] font-boogaloo font-semibold uppercase text-center z-20 mb-10 md:hidden block">Success Stories</h2>
      <div className="padding-container max-container w-full pb-5 flex flex-row justify-center items-center">
        <div className="relative grid grid-cols-2 gap-5 lg:gap-0 w-full lg:mt-5 paper-effect border-l-2 border-r-2 border-green-70">
          <div className="relative z-20 flex flex-col justify-start items-center gap-2 lg:gap-10 text-white p-2 md:p-8">
            <h2 className="lg:text-xl md:text-lg text-2xl xl:text-3xl 2xl:text-4xl text-white font-boogaloo uppercase text-center z-20 hidden md:block">Success Stories</h2>
            <div className="flex flex-col justify-center items-center z-20">
              <h3 className="lg:text-lg md:text-md text-sm xl:text-xl 2xl:text-2xl w-full text-white font-boogaloo uppercase text-center">
                {storiesData[currentSlide].title}
              </h3>
              <p className="lg:text-sm md:text-sm text-sm xl:text-md 2xl:text-lg text-center w-full text-white font-normal font-mont">
                {storiesData[currentSlide].description}
              </p>
              <button
                onClick={() => handleReadMore(storiesData[currentSlide].url)}
                className="text-white border-2 border-white p-1 rounded-lg mt-4 bold-12 lg:bold-16 text-center font-normal font-mont"
                >
                
                Read More
                
              </button>
            </div>
            <img
              src='/half-circle-left-success.png'
              alt='half-circle-left-success'
              width={100}
              height={100}
              className='lg:mt-[-30rem] lg:ml-[-8rem] absolute z-10'
            />
          </div>
          
          <div className="relative z-20 flex flex-col w-full justify-center items-center overflow-hidden">
            <img
              src={storiesData[currentSlide].image}
              alt="story-image"
              key={currentSlide}
              className="w-full h-auto lg:p-5"
            />
          </div>
        </div>
      </div>

      <div id='arrows' className='flex flex-row justify-center items-center bg-blue-900 gap-[22.5rem] md:gap-[40rem] lg:gap-[57rem] xl:gap-[82rem] 2xl:gap-[200rem] w-screen md:w-full absolute z-30 pl-20 pr-20'>
        <img
          src='/success-arrow.png'
          alt='success-arrow-prev'
          width={30}
          height={30}
          className='rotate-[180deg] flex justify-start items-center -mt-7 lg:mt-[-5rem] cursor-pointer'
          onClick={prevSlide}
        />
        <img
          src='/success-arrow.png'
          alt='success-arrow-next'
          width={30}
          height={30}
          className='flex justify-end items-center -mt-7 lg:mt-[-5rem] cursor-pointer'
          onClick={nextSlide}
        />
      </div>

      {/* Custom gap styles for different screen sizes */}
      <style jsx>{`
        #arrows {
          gap: 300px; 
        }
        @media (min-width: 375px) {
          #arrows {
            gap: 350px; 
          }
        }
        @media (min-width: 768px) {
          #arrows {
            gap: 44rem; /* For larger screens like tablets */
          }
        }
        @media (min-width: 1024px) {
          #arrows {
            gap: 60rem; /* For desktops */
          }
        }
         @media (min-width: 1280px) {
          #arrows {
            gap: 85rem; /* For large desktops */
          }
         @media (min-width: 2560px) {
          #arrows {
            gap: 95rem; /* For large desktops */
          }
      `}</style>
    </section>
  );
};

export default Stories;
