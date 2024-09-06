import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flexCenter flex-col mb-24 z-30 relative'>
      <Image 
      src='/footer-circle.png'
      alt='footer-bg'
      width={200}
      height={200}
      className='absolute lg:left-[0rem] md:ml-[-40rem] md:mt-[-20rem] lg:top-[0rem] mt-[-35rem] ml-[-20rem] z-10'
      />
      <Image 
      src='/footer-bg.png'
      alt='footer-bg'
      width={1600}
      height={900}
      className='z-30'
      />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-0 text-white w-full lg:pb-10 lg:pl-60 lg:pr-60 z-30 bg-[#b93636] lg:bg-opacity-0 relative lg:mt-[-20rem] md:mt-[-14.6rem] mt-[-9.2rem]">
      <div className="flex flex-col items-center justify-center lg:pb-0 pb-10">
        <Image
          src="/footer-ic-address.png"
          alt="Address Icon"
          width={40}
          height={40}
        />
        <h3 className="mt-4 text-white lg:text-lg md:text-md text-sm xl:text-xl 2xl:text-2xl font-semibold font-boogaloo uppercase">ADDRESS</h3>
        <p className="text-center text-white lg:text-sm md:text-sm text-sm xl:text-sm 2xl:text-sm mt-2 font-medium font-mont initial">
        VM Villa, 292, Rustamji Street, Garden East, Karachi, Pakistan. 
        </p>
      </div>
      
      <div className="flex flex-col items-center">
        <Image
          src="/footer-ico-mob.png"
          alt="Phone Icon"
          width={40}
          height={40}
        />
        <h3 className="mt-7 text-white lg:text-lg md:text-md text-sm xl:text-xl 2xl:text-2xl font-semibold font-boogaloo uppercase">GET IN TOUCH</h3>
        <a href='tel:+922133518919'>
        <p className="text-center text-sm mt-2">
          +92 21 33518919
        </p>
        </a>
        <a href='mailto:info@jawaanchampions.com'>
        <p className="text-center text-sm mt-2">
          info@jawaanchampions.com
        </p>
        </a>
      </div>
      
      <div className="flex flex-col items-center">
        <Image
          src="/footer-ico-connect.png"
          alt="Social Media Icon"
          width={90}
          height={90}
        />
        <h3 className="mt-9 text-white  lg:text-lg text-sm xl:text-xl 2xl:text-2xl font-semibold font-boogaloo uppercase">STAY CONNECTED</h3>
        <div className="flex space-x-4 mt-2 lg:pb-0 pb-10">
          <a href='https://www.facebook.com/share/1R3VZNxZxuw7Y4f7/?mibextid=qi2Omg' target='_blank'>
          <Image
            src="/footer-fb.png"
            alt="Facebook"
            width={30}
            height={30}
          />
          </a>
          <a href='' target='_blank'>
          <Image
            src="/footer-yt.png"
            alt="Youtube"
            width={30}
            height={30}
          />
          </a>
          <a href='https://www.instagram.com/jawaan_champions?igsh=MTZpdTB4bHcxa3Y5OQ' target='_blank'>
          <Image
            src="/footer-ig.png"
            alt="Instagram"
            width={30}
            height={30}
          />
          </a>
        </div>
      </div>
      </div>
      <div className='w-full lg:mt-4 mt-0 lg:pb-0 pb-5 text-center text-white lg:text-sm md:text-sm text-sm xl:text-lg 2xl:text-md z-30 bg-[#b93636] lg:bg-opacity-0
      font-semibold font-mont initial'>
        <p>Jawaan Champions - VM Trust for Education A project of ZVMG Rangoowala Trust</p>
      </div>
      <div className='max-container flex w-full flex-col gap-14 bg-blue-900'>
           
        </div>
    </footer>
  )
}


export default Footer
