'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import story1 from '/public/story1.png'; // Proper import of the image
import story2 from '/public/story2.png';
import story3 from '/public/story3.png';
import story4 from '/public/story4.png';

const storiesData = [
  {
    title: 'Rounders on Blackboard: Overcoming Limitations with Creativity ',
    description: 'In a school without outdoor space, a group of students refused to give up their love for rounders, a modified sport introduced by Jawaan Champions. For six months, they practiced on a blackboard, using their imagination to fuel their determination. When they finally played on a real field, their creativity and perseverance shone, proving that no obstacle is too great when passion and innovation lead the way.',
    image: story1,  // Correct usage of the imported image
  },
  {
    title: 'Active School, Raised Admissions: Transforming Education and Community',
    description: 'St. Jude’s High School in North Nazimabad partnered with Jawaan Champions to improve student well-being through sports. The result? Not only did student health improve, but the school saw a surge in admissions as parents recognized the value of holistic education. Girls excelling in sports challenged societal norms, and the school became a beacon for change, transforming both its culture and the surrounding community.',
    image: story2,  // Correct usage of the imported image
  },
  {
    title: 'Empowerment Through Physical Activity: A Teacher’s Impact ',
    description: 'Mr. Ali, a school teacher with limited resources, embraced Jawaan Champions’ training and introduced modified games to his students. The results were remarkable: student engagement and academic performance soared, and Mr. Ali’s dedication earned him recognition and supplemental income. Jawaan Champions didn’t just transform his classroom—they empowered him, proving that innovative education can change lives. ',
    image: story3, // Correct usage of the imported image
  },
  {
    title: 'Faith and Passion: Breaking Barriers in Sports',
    description: "Amina, once confined to the sidelines, found her passion for cricket reignited through Jawaan Champions' inclusive sports programs. Despite societal expectations, she became a star on the field, inspiring other girls to step out of their comfort zones. Amina’s journey, supported by faith and dreams, is a testament to the power of breaking stereotypes and embracing opportunity.",
    image: story4, // Correct usage of the imported image
  },
];

const Stories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? storiesData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === storiesData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="flexCenter flex-col lg:pr-0 lg:pl-0 pr-16 pl-16 relative">
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="torn-edge" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.1 Q 0.25,0.2 0.5,0.1 Q 0.75,0 1,0.1 V 1 H 0 Z"></path>
          </clipPath>
        </defs>
      </svg>
      
      <div className="padding-container max-container w-full pb-24 flex flex-col justify-center items-center">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-32 lg:gap-0 lg:h-[500px] w-full lg:mt-5 paper-effect border-l-2 border-r-2 border-green-70">
          <div className="relative z-20 flex flex-col justify-start items-center gap-24 text-white p-8">
            <h2 className="bold-20 lg:bold-32 text-white font-boogaloo uppercase text-center z-20">Success Stories</h2>
            <div className="flex flex-col justify-center items-start z-20">
              <h3 className="bold-16 lg:bold-20 text-white font-boogaloo uppercase text-center">
                {storiesData[currentSlide].title}
              </h3>
              <p className="regular-16 text-white xl:max-w-[520px] font-normal font-mont">
                {storiesData[currentSlide].description}
              </p>
            </div>
            <Image
              src='/half-circle-left-success.png'
              alt='half-circle-left-success'
              width={100}
              height={100}
              className='lg:mt-[-30rem] lg:ml-[-8rem] absolute z-10'
            />
          </div>
          
          <div className="relative z-20 flex flex-col w-full justify-center items-center overflow-hidden" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
            <Image
              src={storiesData[currentSlide].image}
              alt="story-image"
              width={1500}
              height={400}
              key={currentSlide}  // Add this key to force re-render on slide change
              className="lg:p-5"
            />
          </div>
        </div>
      </div>

      <div className='flex flex-row justify-center items-center xl:gap-[85rem] lg:gap-[55rem] md:gap-[40rem] gap-[20rem] w-full absolute z-10'>
        <Image
          src='/success-arrow.png'
          alt='success-arrow-prev'
          width={50}
          height={50}
          className='rotate-[180deg] flex flexStart justify-start items-center lg:mt-[-5rem] cursor-pointer'
          onClick={prevSlide}
        />
        <Image
          src='/success-arrow.png'
          alt='success-arrow-next'
          width={50}
          height={50}
          className='flex flexStart justify-start items-center lg:mt-[-5rem] cursor-pointer'
          onClick={nextSlide}
        />
      </div>
    </section>
  );
};

export default Stories;
