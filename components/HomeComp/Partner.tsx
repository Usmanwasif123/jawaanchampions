import React from 'react'

const Partner = () => {
  return (
    <section className='flexCenter flex-col xl:mt-[-35rem]'>
      <div className='padding-container max-container w-full flex flex-col jutsify-center items-center pb-24 z-10'>
        <h2 className='pb-16 lg:text-xl md:text-lg text-2xl xl:text-3xl 2xl:text-4xl text-[#006837] 
        font-semibold font-boogaloo uppercase'>Our partners</h2>
          <div className='flex lg:flex-row flex-col justify-center gap-20 items-center'>
            <img
              src='/youth-partner.png'
              alt='youth-partner'
              width={100}
              height={100}
            />
            <img
              src='/british-partner.png'
              alt='british-partner'
              width={100}
              height={100}
            />
          </div>
      </div>
      <img
     src='/partner-bg.png'
     alt='bg-design'
     width={100}
     height={100}
     className='lg:ml-[89rem] lg:mt-[10rem] md:ml-[42rem] ml-[30rem] absolute'
     />
    </section>
  )
}

export default Partner
