import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flexCenter flex-col z-10 relative w-full'>
      <img 
      src='/footer-circle.png'
      alt='footer-bg'
      width={200}
      height={200}
      className='absolute lg:ml-[-55rem] md:ml-[-40rem] md:mt-[-5rem] lg:mt-[-15rem] xl:mt-[-18rem] xl:ml-[-80rem] 2xl:mt-[-10rem] 2xl:ml-[-85rem] mt-[-20rem] ml-[-20rem] z-10'
      />
      <img 
      src='/footer-bg.png'
      alt='footer-bg'
      width={1600}
      height={900}
      className='z-30 w-full'
      />
      <div className="grid grid-cols-2 grid-row-2 md:grid-row-1 md:grid-cols-3 lg:gap-5 text-white w-full lg:w-8/12 2xl:w-2/4 lg:pb-0 z-30 bg-[#b93636] lg:bg-opacity-0 relative lg:mt-[-18rem] md:mt-[-14.6rem] mt-[-8.2rem] xl:mt-[-20rem] 2xl:mt-[-25rem]">
      <div className="flex flex-col items-center justify-start lg:pb-0 pb-10 p-2 md:p-0">
        <img
          src="/footer-ic-address.png"
          alt="Address Icon"
          className='mt-5 md:mt-3 w-1/5 h-1/5 md:w-1/6 md:h-1/6 2xl:w-1/5 2xl:h-1/5'
        />
        <h3 className="mt-7 text-white lg:text-lg md:text-md text-sm xl:text-xl 2xl:text-2xl font-semibold font-boogaloo uppercase">ADDRESS</h3>
        <p className="text-center text-white lg:text-sm md:text-sm text-xs xl:text-md 2xl:text-lg mt-2 font-medium font-mont initial">
        VM Villa, 292, Rustamji Street, Garden East, Karachi, Pakistan. 
        </p>
      </div>
      
      <div className="flex flex-col items-center justify-start p-5 md:p-0">
        <img
          src="/footer-ico-mob.png"
          alt="Phone Icon"
          className='mt-2 w-1/5 h-1/5 md:w-1/6 md:h-1/6 2xl:w-1/5 2xl:h-1/5'
        />
        <h3 className="mt-7 text-white lg:text-lg md:text-md text-sm xl:text-xl 2xl:text-2xl font-semibold font-boogaloo uppercase">GET IN TOUCH</h3>
        <a href='tel:+922133518919'>
        <p className="text-center lg:text-sm md:text-sm text-xs xl:text-md 2xl:text-lg mt-2">
          +92 21 33518919
        </p>
        </a>
        <a href='mailto:info@jawaanchampions.com'>
        <p className="text-center lg:text-sm md:text-sm text-xs xl:text-md 2xl:text-lg mt-2 mb-5">
          info@jawaanchampions.com
        </p>
        </a>
      </div>
      
      <div className="flex flex-col items-center">
        <img
          src="/footer-ico-connect.png"
          alt="Social Media Icon"
          className='w-2/5 h-1/5 md:w-1/4 md:h-1/4 2xl:w-1/4 2xl:h-1/4'
        />
        <h3 className="mt-9 text-white  lg:text-lg text-sm xl:text-xl 2xl:text-2xl font-semibold font-boogaloo uppercase">STAY CONNECTED</h3>
        <div className="flex space-x-4 mt-2 lg:pb-0 pb-10 invisible md:visible">
          <a href='https://www.facebook.com/share/1R3VZNxZxuw7Y4f7/?mibextid=qi2Omg' target='_blank'>
          <img
            src="/footer-fb.png"
            alt="Facebook"
            width={30}
            height={30}
          />
          </a>
          <a href='https://www.linkedin.com/company/jawaan-champions' target='_blank'>
          <img
            src="/footer-li.png"
            alt="Linkedin"
            width={30}
            height={30}
          />
          </a>
          <a href='https://www.instagram.com/jawaan_champions?igsh=MTZpdTB4bHcxa3Y5OQ' target='_blank'>
          <img
            src="/footer-ig.png"
            alt="Instagram"
            width={30}
            height={30}
          />
          </a>
        </div>
      </div>
      <div className="space-x-4 flex flex-row justify-center items-center visible md:invisible">
          <a href='https://www.facebook.com/share/1R3VZNxZxuw7Y4f7/?mibextid=qi2Omg' target='_blank'>
          <img
            src="/footer-fb.png"
            alt="Facebook"
            width={30}
            height={30}
          />
          </a>
          <a href='https://www.linkedin.com/company/jawaan-champions' target='_blank'>
          <img
            src="/footer-li.png"
            alt="Linkedin"
            width={30}
            height={30}
          />
          </a>
          <a href='https://www.instagram.com/jawaan_champions?igsh=MTZpdTB4bHcxa3Y5OQ' target='_blank'>
          <img
            src="/footer-ig.png"
            alt="Instagram"
            width={30}
            height={30}
          />
          </a>
        </div>
      </div>
      <div className='w-full lg:-mt-8 mt-0 2xl:mt-0 lg:pb-0 pb-5 text-center text-white  w-full lg:w-8/12 2xl:w-9/12 lg:text-xs md:text-sm text-sm xl:text-md 2xl:text-base z-30 bg-[#b93636] lg:bg-opacity-0
      font-semibold font-mont initial'>
        <p>Jawaan Champions - VM Trust for Education A project of ZVMG Rangoowala Trust</p>
      </div>
      
    </footer>
  )
}


export default Footer
