import React from 'react'

const Statement = () => {
  return (
    <section className='flexCenter flex-col pb-10 md:pb-10'>
  <div className='padding-container max-container w-full '>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10'>
      <div className='flex flex-col justify-center items-center' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
      <h2 className='lg:text-xl md:text-lg text-2xl xl:text-3xl 2xl:text-4xl font-boogaloo uppercase text-center text-[#006837] mb-5'>Mission Statement</h2>
      <p className='lg:text-sm md:text-sm text-sm xl:text-md 2xl:text-lg text-[#8e8d8d] xl:max-w-[520px] flex justify-center items-center text-center font-normal font-mont'>
      We aim to foster understanding and integration of physical education (PE) into the current education system by providing comprehensive training for teachers which will help uplift communities. 
      </p>
      </div>
      <div className='flex justify-center items-center'>
      <img
          src='/cloud-statement-middle.png'
          alt='cloud-statement-middle'
          width={200}
          height={200}
          className='absolute z-10 lg:mt-[-15rem] md:mt-[-30rem] md:ml-[-12rem] lg:ml-[-3.5rem] mt-[-9rem] ml-[-0rem]'
        />
        <img
          src='/gvector-statement-middle.png'
          alt='gvector-statement-middle'
          width={100}
          height={100}
          className='absolute z-10 lg:mt-[-17rem] lg:ml-[14rem] mt-[-20rem] ml-[14rem]'
        />
        <img
          src='/man-with-high-jump.png'
          alt='man-with-high-jump'
          width={900}
          height={900}
          className='z-20'
        />
        <img
          src='/grass-statement-middle.png'
          alt='grass-statement-middle'
          width={120}
          height={120}
          className='absolute z-10 xl:mt-[25rem] xl:ml-[-8.5rem] lg:mt-[13rem] md:mt-[40rem] md:ml-[-15rem]  lg:ml-[-5rem] mt-[23rem] ml-[-8rem] hidden xs:block'
        />
        <img
          src='/g-vector-statement-end.png'
          alt='g-vector-statement-end'
          width={35}
          height={35}
          className='absolute z-10 xl:mt-[30rem] xl:ml-[10rem] lg:mt-[20rem] lg:ml-[5rem] mt-[28rem] ml-[10rem] hidden xs:block'
        />
      </div>
      <div className='flex flex-col justify-center items-center' data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
      <h2 className='lg:text-xl md:text-lg text-2xl xl:text-3xl 2xl:text-4xl font-boogaloo uppercase text-center text-[#006837] mb-5'>vision Statement</h2>
      <p className='lg:text-sm md:text-sm text-sm xl:text-md 2xl:text-lg text-[#8e8d8d] xl:max-w-[520px] flex justify-center items-center text-center font-normal font-mont'>
       The Pakistan Centre for Sports and Leadership is dedicated to utilizing the influential combination of sports and leadership to drive meaningful social change, particularly among the nation's youth (Jawaan) through creating Champions of Change. 
      </p>
      </div>
    </div>
  </div>
</section>

  )
}

export default Statement
