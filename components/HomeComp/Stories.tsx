'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

const storiesData = [
  {
    title: 'Rounders on Blackboard: Overcoming Limitations with Creativity',
    description: "In a small, bustling school with no outdoor space, a group of students faced the challenge of having no playground for their beloved game of rounders, a modified sport introduced by Jawaan Champions. This was also the first time they truly understood the importance of physical activity and education. Undeterred, they turned adversity into opportunity by practicing on a blackboard for six months.",
    image: '/story1.png',
    url: '/success-stories',
  },
  {
    title: 'Active School, Raised Admissions: Transforming Education and Community',
    description: "When St. Jude’s High School in North Nazimabad first partnered with Jawaan Champions, their primary goal was to improve their students’ health and well-being. Little did they know, this decision would completely transform their school's reputation and culture. By incorporating Jawaan Champions’ modified sports programs into their manifesto, making them part of the active schools program, the benefits extended far beyond the school gates.",
    image: '/story2.png',
    url: '/success-stories',
  },
  {
    title: 'Empowerment Through Physical Activity: A Teacher’s Impact',
    description: "Mr. Ali, a school teacher, faced challenges in engaging his students in physical activity due to limited resources. Jawaan Champions provided him with the training and tools to transform his classroom into a dynamic learning environment. By incorporating innovative, modified games that catered to all students, he ignited a new spark of enthusiasm in his class. The positive ripple effect was astonishing; not only did the student engagement soar, but academic performance also saw a remarkable uplift.",
    image: '/story3.png',
    url: '/success-stories',
  },
  {
    title: 'Faith and Passion: Breaking Barriers in Sports',
    description: "For years, sports had been a boys' domain in many Pakistani schools and the girls have often found themselves limited to the sidelines with their potential untapped. Amina, a bright, young girl, had always loved the thrill of competition. But as she grew older, the demands of her school and societal expectations began to draw invisible lines around her. The hijab, a symbol of her faith, now felt like a barrier.",
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
    <section className="flexCenter flex-col lg:pr-0 lg:pl-0 pr-16 pl-16 relative">
      <div className="padding-container max-container w-full pb-24 flex flex-col justify-center items-center">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-32 lg:gap-0 lg:h-[500px] w-full lg:mt-5 paper-effect border-l-2 border-r-2 border-green-70">
          <div className="relative z-20 flex flex-col justify-start items-center gap-24 text-white p-8">
            <h2 className="bold-20 lg:bold-32 text-white font-boogaloo uppercase text-center z-20">Success Stories</h2>
            <div className="flex flex-col justify-center items-center z-20">
              <h3 className="bold-16 lg:bold-20 text-white font-boogaloo uppercase text-center">
                {storiesData[currentSlide].title}
              </h3>
              <p className="regular-16 text-center text-white xl:max-w-[520px] font-normal font-mont">
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
              width={1500}
              height={400}
              key={currentSlide}
              className="lg:p-5"
            />
          </div>
        </div>
      </div>

      <div className='flex flex-row justify-center items-center gap-[14rem] md:gap-[40rem] lg:gap-[57rem] xl:gap-[82rem] 2xl:gap-[89rem] w-screen md:w-full absolute z-30 pl-20 pr-20'>
        <img
          src='/success-arrow.png'
          alt='success-arrow-prev'
          width={40}
          height={40}
          className='rotate-[180deg] flex justify-start items-center lg:mt-[-5rem] cursor-pointer'
          onClick={prevSlide}
        />
        <img
          src='/success-arrow.png'
          alt='success-arrow-next'
          width={40}
          height={40}
          className='flex justify-end items-center lg:mt-[-5rem]  cursor-pointer'
          onClick={nextSlide}
        />
      </div>
    </section>
  );
};

export default Stories;
