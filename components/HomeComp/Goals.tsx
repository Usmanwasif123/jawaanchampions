import React from 'react';

const Goals = () => {
  
  return (
    <section    
      className='flexCenter w-full flex-col xl:pb-[25rem] lg:pb-[30rem] pb-[5rem] p-5 md:p-0'>
      <h2 className='text-center lg:text-xl md:text-lg text-2xl xl:text-3xl 2xl:text-4xl text-[#006837] 
        font-bold font-boogaloo uppercase pb-7'>Sustainable Development Goals</h2>
      <p className='font-medium font-mont initial lg:text-sm md:text-sm text-sm xl:text-md 2xl:text-lg mb-5 text-center xl:pl-[28rem] xl:pr-[28rem] lg:pr-[10rem] lg:pl-[10rem] md:pr-[8rem] md:pl-[8rem] pb-5'>Jawaan Champions is committed to creating a positive and lasting impact on communities by fulfilling key Sustainable Development Goals (SDGs). Through our initiatives, we promote health, well-being, empowerment, and inclusivity, while also fostering sustainable growth and community cohesion. Our efforts are dedicated to building a brighter and more equitable future for all.</p>
      <div className='flex lg:flex-row flex-col justify-center w-10/12 gap-0 items-center'> 
        <div className='z-20 flex flex-[1] items-center justify-start lg:pb-0 xl:h-[100rem] lg:h-[50rem] xl:pb-[26rem] relative'>
        <img className='absolute z-30 xl:left-[9rem] lg:left-[1rem] md:left-[6rem]'
        src='/goals-sdgs.png'
        alt='goals-sdgs'
        width={400}
        height={400}
        />
          <img
            src='/globe-for-goals.png'
            alt='globe-for-goals'
            width={600}
            height={1000}
            className='z-20  md:pb-7'
          />
        </div>
        <div className='z-20 flex-[1] flex flex-col items-center justify-center gap-2 md:gap-12 w-full lg:w-0 h-[0rem]'>
        <div className="z-20 flex justify-center items-center relative xl:ml-[-65rem] lg:ml-[-30rem]"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0">
        <img 
        src="/orange-circle-goals.png"
        alt='orange-circle-goals'
        width={150}
        height={150}
        className='z-20 xl:mt-[-20rem] xl:ml-[20rem] lg:mt-[30rem] w-3/12 h-3/12 lg:w-2/12 lg:h-2/12'
        />
        </div>
        <div className="z-20 flex justify-center items-center relative xl:ml-[-15rem]"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
        <img 
        src="/green-circle-goals.png"
        alt='green-circle-goals'
        width={250}
        height={250}
        className='z-20 xl:mt-[-15rem] xl:ml-[0rem] lg:mt-[-10rem] w-5/12 h-5/12 lg:w-7/12 lg:h-7/12'
        />
        </div> 
        <div className="z-20 flex justify-center items-center relative xl:ml-[-30rem] lg:ml-[-15rem]"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
         <img 
        src="/blue-circle-goals.png"
        alt='blue-circle-goals'
        width={230}
        height={230}
        className='z-20 xl:mt-[-5rem] lg:mt-[-5rem] -mt-5 w-4/12 h-4/12 lg:w-5/12 lg:h-5/12'
        />
        </div> 
        <div className="z-20 flex justify-center items-center relative xl:ml-[-8rem]"
        data-aos="fade-down"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
        <img 
        src="/red-circle-goals.png"
        alt='red-circle-goals'
        width={230}
        height={230}
        className='z-20 xl:mt-[-5rem] lg:mt-[-5rem] w-6/12 h-6/12 lg:w-8/12 lg:h-8/12 hidden md:block'
        />
        </div> 
        <div className="flex justify-center items-center relative xl:ml-[10rem] lg:ml-[15rem]"
        data-aos="fade-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
        <img 
        src="/yellow-circle-goals.png"
        alt='yellow-circle-goals'
        width={230}
        height={230}
        className='z-20 xl:mt-[-50rem] lg:mt-[-45rem] -mt-5 w-5/12 h-5/12'
        />
        </div>
        <div className="z-20 flex justify-center items-center relative xl:ml-[-8rem]"
        data-aos="fade-down"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
        <img 
        src="/red-circle-goals.png"
        alt='red-circle-goals'
        width={230}
        height={230}
        className='z-20 xl:mt-[-5rem] lg:mt-[-5rem] -mt-4 w-6/12 h-6/12 md:hidden block'
        />
        </div>  
        <div className="z-20 flex justify-center items-center relative xl:ml-[-33rem] lg:ml-[-30rem]"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
        <img 
        src="/orange2-circle-goals.png"
        alt='orange2-circle-goals'
        width={230}
        height={230}
        className='z-20 xl:mt-[-10rem] lg:mt-[-25rem] -mt-6 w-6/12 h-6/12 lg:w-7/12 lg:h-7/12'
        />
        </div>
        <div className="flex justify-center items-center relative xl:ml-[12rem] lg:ml-[20rem] block md:hidden"
        data-aos="fade-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
        <img 
        src="/green2-circle-goals.png"
        alt='green2-circle-goals'
        width={230}
        height={230}
        className='z-20 xl:mt-[-40rem] lg:mt-[-30rem] -mt-2 w-6/12 h-6/12 lg:w-5/12 lg:h-5/12'
        />
        </div> 
        <div className="flex justify-center items-center relative xl:ml-[-10rem]"
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
        <img 
        src="/yellow2-circle-goals.png"
        alt='yellow2-circle-goals'
        width={230}
        height={230}
        className='z-20 xl:mt-[-7rem] lg:mt-[-10rem] -mt-2 w-7/12 h-7/12 lg:w-6/12 lg:h-6/12'
        />
        </div> 
        <div className="flex justify-center items-center relative xl:ml-[27rem] lg:ml-[20rem] hidden md:block"
        >
        <img 
        src="/green2-circle-goals.png"
        alt='green2-circle-goals'
        width={230}
        height={230}
        className='z-20 xl:mt-[-40rem] lg:mt-[-30rem] -mt-2 w-6/12 h-6/12 lg:w-7/12 lg:h-7/12'
        />
        </div> 
        <div className="flex justify-center items-center relative xl:ml-[-40rem] lg:ml-[-30rem]"
        data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
        <img 
        src="/blue2-circle-goals.png"
        alt='blue2-circle-goals'
        width={230}
        height={230}
        className='z-20 xl:mt-[-15rem]  lg:mt-[-18rem] w-5/12 h-5/12 lg:w-6/12 lg:h-6/12'
        />
        </div> 
        <div className="flex justify-center items-center relative xl:ml-[-5rem]"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
        <img 
        src="/red2-circle-goals.png"
        alt='red2-circle-goals'
        width={230}
        height={230}
        className='z-20 xl:mt-[-5rem] lg:mt-[-10rem] w-6/12 h-6/12 lg:w-7/12 lg:h-7/12'
        />
        </div> 
        
        </div>
        <img 
      src='/goals-right-bg.png'
      alt='bg-design'
      width={300}
      height={300}
      className='lg:ml-[75rem] lg:mt-[-40rem] absolute hidden lg:block'
      />
      </div>
      
    </section>
  );
};

export default Goals;
