import Image from 'next/image'
import React from 'react'

const Location = () => {
  return (
    <section className='flexCenter flex-col pb-[100px]'>
      <h2 className='text-center text-lg lg:text-lg md:text-md  xl:text-xl 2xl:text-2xl text-[#006837] 
        font-bold font-boogaloo uppercase mb-5'>footprint across the city</h2>
      <div className='padding-container max-container w-full pb-24 z-10'>
            <div className='text-center flex flex-col  absolute  xl:mt-[4rem] xl:left-[24rem] lg:mt-[4rem] lg:ml-[15rem] md:ml-[8rem] md:mt-[3rem] mt-[1rem] left-[11rem] z-30 text-black'
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
          <h2 className='lg:text-lg md:text-md text-sm xl:text-xl 2xl:text-2xl font-semibold font-mont uppercase'>schools</h2>
          <span className='lg:text-md md:text-sm text-xs xl:text-lg 2xl:text-xl font-normal font-mont initial'>Karachi West District</span>
          </div>
          <div className='text-center flex flex-col  absolute  xl:mt-[15rem] xl:left-[18rem] lg:mt-[14rem] lg:ml-[10rem] md:mt-[21rem] md:ml-[-2rem] mt-[6rem] left-[5rem] z-30'
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500">
          <h2 className='lg:text-lg md:text-md text-sm xl:text-xl 2xl:text-2xl font-semibold font-mont uppercase'>schools</h2>
          <span className='lg:text-md md:text-sm text-xs xl:text-lg 2xl:text-xl font-normal font-mont initial'>Karachi Central District</span>
          </div>
          <div className='text-center flex flex-col  absolute  xl:mt-[27rem] xl:left-[14rem] lg:mt-[25rem] lg:ml-[6rem] md:ml-[8rem] mt-[12rem] left-[2rem] z-30'
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500">
          <h2 className='lg:text-lg md:text-md text-sm xl:text-xl 2xl:text-2xl font-semibold font-mont uppercase'>schools</h2>
          <span className='lg:text-md md:text-sm text-xs xl:text-lg 2xl:text-xl font-normal font-mont initial'>Karachi East District</span>
          </div>
          <div className='text-center flex flex-col  absolute  xl:mt-[57rem] xl:left-[18rem] lg:mt-[54rem] lg:ml-[10rem] md:mt-[46rem] md:ml-[4rem] mt-[28rem] left-[5rem] z-30'
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500">
          <h2 className='lg:text-lg md:text-md text-sm xl:text-xl 2xl:text-2xl font-semibold font-mont uppercase'>schools</h2>
          <span className='lg:text-md md:text-sm text-xs xl:text-lg 2xl:text-xl font-normal font-mont initial'>Kemari District</span>
          </div>
          <div className='text-center flex flex-col  absolute  xl:mt-[65rem] xl:left-[28rem] lg:mt-[61rem] lg:ml-[18rem] md:mt-[52rem] md:ml-[10rem] mt-[31rem] left-[15rem] z-30'
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500">
          <h2 className='lg:text-lg md:text-md text-sm xl:text-xl 2xl:text-2xl font-semibold font-mont uppercase'>schools</h2>
          <span className='lg:text-md md:text-sm text-xs xl:text-lg 2xl:text-xl font-normal font-mont initial'>Karachi South District</span>
          </div>
          <div className='text-center flex flex-col  absolute  xl:mt-[54rem] xl:left-[40rem] lg:mt-[51rem] lg:ml-[28rem] md:mt-[43rem] md:ml-[17rem] mt-[26rem] left-[24.5rem] z-30'
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500">
          <h2 className='lg:text-lg md:text-md text-sm xl:text-xl 2xl:text-2xl font-semibold font-mont uppercase'>schools</h2>
          <span className='lg:text-md md:text-sm text-xs xl:text-lg 2xl:text-xl font-normal font-mont initial'>Korangi District</span>
          </div>
          <div className='text-center flex flex-col  absolute  xl:mt-[30rem] xl:left-[41rem] lg:mt-[28rem] lg:ml-[30rem] md:mt-[10rem] md:ml-[17rem] mt-[14rem] left-[24.5rem] z-30'
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500">
          <h2 className='lg:text-lg md:text-md text-sm xl:text-xl 2xl:text-2xl font-semibold font-mont uppercase'>schools</h2>
          <span className='lg:text-md md:text-sm text-xs xl:text-lg 2xl:text-xl font-normal font-mont initial'>Cantonments</span>
          </div>
          <div className='text-center flex flex-col  absolute  xl:mt-[13rem] xl:left-[42rem] lg:mt-[12rem] lg:ml-[28rem] md:mt-[24rem] md:ml-[18rem] mt-[6rem] left-[24.5rem] z-30'
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500">
          <h2 className='lg:text-lg md:text-md text-sm xl:text-xl 2xl:text-2xl font-semibold font-mont uppercase'>schools</h2>
          <span className='lg:text-md md:text-sm text-xs xl:text-lg 2xl:text-xl font-normal font-mont initial'>Malir District</span>
          </div>
          <div className='flex justify-center items-center z-10'>
            <Image
              src='/map-image.png'
              alt='map-image'
              width={900}
              height={900}
              className='z-20'
            />
          </div>
      </div>
    </section>
  )
}

export default Location
