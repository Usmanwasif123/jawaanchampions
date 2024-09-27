'use client'
export default function Journey() {
    return (
      <section className="relative flex flex-col justify-center items-center bg-white py-12 w-full h-full z-0 mb-20 md:mb-10">
        {/* Heading Section */}
        <div className="relative flex flex-col items-center w-full mb-20">
          <h2 className="text-2xl md:text-md lg:text-lg xl:text-xl 2xl:text-4xl text-[#006837] font-semibold font-boogaloo uppercase mb-8">
            Our Journey
          </h2>
          <div className="absolute top-0 right-10 flex flex-row gap-5">
          <img
            src='/blue-vector-hero.png'
            alt='blue-vector-journey'
            width={80}
            height={80}
            className="hidden md:block"
          />
            <img
              src="/middle-circle-hero.png"
              alt="middle-circle-journey"
              width={80}
              height={80}
              className="hidden md:block"
            />
          </div>
        </div>
  
{/* Journey Path Section */}
<div className="grid grid-cols-3 grid-rows-1 gap-0">
    <div className="flex flex-col justify-start items-center gap-14 md:gap-16 lg:gap-14 xl:gap-20 ml-2 mt-28 md:mt-28 lg:mt-28 xl:mt-20 w-full">
    <div className="flex flex-col justify-end items-start w-full">
  <h3 className="font-bold text-xs md:text-md lg:text-lg xl:text-2xl text-[#002c60] font-boogaloo w-full text-right ml-[-1rem] xl:ml-[2rem]">
    2016 - Gap Analysis
  </h3>
  <div className="flex flex-col flexCenter w-full xs:ml-1 sm:ml-0 ml-0 md:ml-6 lg:ml-9 xl:ml-20">
  <p className="text-gray-600 text-[0.45rem] md:text-xs lg:text-sm xl:text-md text-[#464646] w-full text-right xss:mt-40 xs:mt-32  mt-32 md:mt-32 lg:mt-32 xl:mt-20">
    Following the initial gap analysis, we strategically selected 115 underserved schools in Karachi to pilot our program. These schools were chosen based on their location in marginalized areas, the socioeconomic status of their students, and their existing sports infrastructure. The selection of these schools ensured that our program would reach those who would benefit the most and have the most significant impact.
  </p>
</div>
</div>
      <div className="flex flex-col justify-end items-start w-full">
      <h3 className="font-bold text-xs md:text-md lg:text-lg xl:text-2xl text-[#f6943a] font-boogaloo w-full  text-right ml-[-1rem] xl:ml-[2rem]">
       First-ever Physical<br /> Education Championship</h3>
        <div className="flex flex-col flexCenter w-full xs:ml-1 sm:ml-0 ml-0 md:ml-6 lg:ml-9 xl:ml-20">
        <p className="text-gray-600 text-[0.45rem] md:text-xs lg:text-sm xl:text-md text-[#464646] w-full  text-right xss:mt-[10rem] xs:mt-[8rem]  mt-[8rem] md:mt-[8rem] lg:mt-[7rem] xl:mt-[5rem]">
        Recognizing the positive impact and growing demand, we had successfully expanded our reach to include 115 schools earlier in the years. Building upon this momentum, we further expanded our operations to encompass 260 schools across the city. This significant growth allowed us to provide sports and leadership opportunities to a larger number of young athletes, empowering them to reach their full potential.
        </p>
        </div>
      </div>
      <div className="flex flex-col justify-end items-start w-full">
        <h3 className="font-bold text-xs md:text-md lg:text-lg xl:text-2xl text-[#48c580] font-boogaloo w-full  text-right xss:mt-4 xs:mt-8  mt-4 md:mt-7 lg:mt-9 xl:-mt-9 ml-[-0.6rem] md:ml-[-1rem] xl:ml-[2rem]">First ever Teacher Training by YSTI in <br/> Karachi for a total of 14 teachers</h3>
        <div className="flex flex-col flexCenter w-full xs:ml-1 sm:ml-0 ml-0 md:ml-6 lg:ml-9 xl:ml-20">
        <p className="text-gray-600 text-[0.45rem] md:text-xs lg:text-sm xl:text-md text-[#464646] w-full  text-right xss:mt-24 xs:mt-16  mt-16 md:mt-20 lg:mt-20 xl:mt-16">
        To ensure the successful implementation of our programs in the expanded network of 260 schools, we conducted a comprehensive teacher training session. This training was designed to equip teachers with the necessary skills and knowledge to effectively integrate physical education into the existing curriculum. This was a groundbreaking initiative, as it marked the first-time PE training was offered to such a large number of educators in Karachi.
        </p>
        </div>
      </div>
      <div className="flex flex-col justify-end items-end w-9/12 ml-[0rem] md:ml-[0rem] xl:ml-[10rem]">
        <h3 className="font-bold text-xs md:text-md lg:text-lg xl:text-2xl text-[#002c60] font-boogaloo w-full text-right xss:-mt-1 xs:mt-2 mt-6 md:mt-5 lg:-mt-4 xl:-mt-11">Implementation of the first-ever sports <br/> management system</h3>
      </div>
    </div>
       <div className="flex justify-center items-center">
      <img src="/journey-snake.png" alt="journey-snake" 
      className="max-w-full h-full" />
    </div>
    <div className="flex flex-col justify-start items-center gap-32 md:gap-32 lg:gap-32 xl:gap-40 md:m-1 lg:-ml-4 mt-20 md:mt-28 lg:mt-20 xl:mt-20 p-2 md:p-0">
    <div className="flex flex-col justify-start items-start w-full">
      <div className="flex flex-col flexCenter w-full xs:ml-1 sm:ml-0 ml-0 md:-ml-10 lg:-ml-12 xl:-ml-20">
    <p className="text-gray-600 text-[0.45rem] md:text-xs lg:text-sm xl:text-md text-[#464646]  text-left">
     A comprehensive gap analysis was conducted to identify the specific challenges and opportunities young athletes face in underserved communities in Pakistan. This analysis helped us understand the pressing needs and inform the development of our targeted programs.
    </p>
    </div>
    <h3 className="font-bold text-xs md:text-md lg:text-lg xl:text-2xl text-[#8ac53d] font-boogaloo w-full  text-left xss:mt-20 xs:mt-12  mt-14 md:mt-14 lg:mt-20 xl:mt-16 ml-0 lg:ml-5">
      Selection of 115 pilot underserved <br /> schools in Karachi to execute the Program
    </h3>
    </div>
      <div className="flex flex-col justify-start items-start w-full">
        <div className="flex flex-col flexCenter w-full xs:ml-0 sm:ml-0 ml-0 md:-ml-10 lg:-ml-12 xl:-ml-20">
        <p className="text-gray-600 text-[0.45rem] md:text-xs lg:text-sm xl:text-md text-[#464646] text-left -mt-20 md:-mt-10 lg:-mt-10 xl:-mt-24">
        The Jawaan Champions Programme proudly hosted the inaugural Physical Education Championship, an inspirational event of our 2023 calendar. Over 13 action-packed days, young athletes from 115 schools across Karachi came together to compete in a range of sports, showcasing their talents across various age and gender categories. This championship was a series of games and a major milestone in our ongoing mission to foster physical activity and promote healthy lifestyles within underserved communities. The event culminated in a thrilling Grand Finale, setting a new standard for youth sports in the region and highlighting the incredible potential of these young athletes.
        </p>
        </div>       
        <h3 className="font-bold text-xs md:text-md lg:text-lg xl:text-2xl text-[#b93636] font-boogaloo w-full  text-left xs:mt-11  mt-14 md:mt-11 lg:mt-8 xl:mt-8 ml-1 lg:ml-5">Expansion of the Project <br/> to 260 Schools</h3>
      </div>
      <div className="flex flex-col justify-start items-start w-full">
        <div className="flex flex-col flexCenter w-full xs:ml-0 sm:ml-0 ml-0 md:-ml-10 lg:-ml-12 xl:-ml-20">
        <p className="text-gray-600 text-[0.45rem] md:text-xs lg:text-sm xl:text-md text-[#464646]  text-left -mt-16 md:-mt-14 lg:-mt-10 xl:-mt-28">
        The First National PE Trainers Training was conducted from September 11th-15th, 2023, to establish a cadre of national trainers in Pakistan. The training aimed to equip skilled educators to lead future PE initiatives. Two international experts from YSTI -Youth Sports Trust facilitated the training for a cohort of 14 teachers. The program culminated in the certification of four National Trainers and ten Assistant National Trainers.
        </p>
        </div>       
        <h3 className="font-bold text-xs md:text-md lg:text-lg xl:text-2xl text-[#d7392a] font-boogaloo mt-24 md:mt-28 lg:mt-20 xl:mt-20 ml-1 lg:ml-5">Second Teacher Training <br/> with 260 Schools</h3>
        <div className="flex flex-col flexCenter w-full xs:ml-0 sm:ml-0 ml-0 md:-ml-10 lg:-ml-12 xl:-ml-20">
        <p className="text-gray-600 text-[0.45rem] md:text-xs lg:text-sm xl:text-md text-[#464646]  text-left mt-24 xl:mt-20">
        We successfully implemented a comprehensive Student Information Management System (SIMS). This platform centralizes student data, enabling efficient tracking of academic performance, attendance, and program participation. By streamlining the data management and analysis, SMIS empowers us to make informed decisions, optimize resource allocation, and measure program impact more accurately.
        </p>
      </div>
      </div>
    </div>
    
</div>

</section>
    );
  }
  