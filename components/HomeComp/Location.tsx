'use client';

import React from 'react';

const Location = () => {
  return (
    <section className="relative w-full pb-0 md:pb-10">
      {/* Title */}
      <h2 className="text-center mt-[-2rem] md:mt-[0rem] lg:mt-[0rem] xl:mt-[0rem] 2xl:mt-[0rem] lg:text-xl md:text-lg text-2xl xl:text-3xl 2xl:text-4xl text-[#006837] font-bold font-boogaloo uppercase mb-5">
        Footprint Across The City
      </h2>

      <div className="relative w-full flex justify-center">
        {/* Image */}
        <img
          src='/map-image.png'
          alt='map-image'
          className="max-w-full h-auto"
        />

        {/* Karachi West */}
        <div className="absolute left-[35%] top-[4%] md:left-[40%] md:top-[7%] lg:left-[39%] lg:top-[8%] xl:left-[42%] xl:top-[8%] 2xl:left-[40%] 2xl:top-[8%] text-center">
          <span className="lg:text-sm md:text-xs text-xs xl:text-sm 2xl:text-md font-semibold font-mont uppercase">SCHOOLS</span>
          <h2 className="lg:text-lg md:text-md text-xs xl:text-xl 2xl:text-2xl font-normal font-mont initial">Karachi West District</h2>
        </div>

        {/* Karachi Central */}
        <div className="absolute right-[57%] top-[20%] md:right-[61%] md:top-[23%] lg:right-[60%] lg:top-[24%] xl:right-[59%] xl:top-[24%] 2xl:right-[57%] 2xl:top-[24%] text-center">
          <span className="lg:text-sm md:text-xs text-xs xl:text-sm 2xl:text-md font-semibold font-mont uppercase">SCHOOLS</span>
          <h2 className="lg:text-lg md:text-md text-xs xl:text-xl 2xl:text-2xl font-normal font-mont initial">Karachi Central District</h2>
        </div>

        {/* Karachi East */}
        <div className="absolute right-[76%] top-[35%] md:right-[78%] md:top-[40%] lg:right-[77%] lg:top-[40%] xl:right-[72%] xl:top-[40%] 2xl:right-[71%] 2xl:top-[42%] text-center">
          <span className="lg:text-sm md:text-xs text-xs xl:text-sm 2xl:text-md font-semibold font-mont uppercase">SCHOOLS</span>
          <h2 className="lg:text-lg md:text-md text-xs xl:text-xl 2xl:text-2xl font-normal font-mont initial">Karachi East District</h2>
        </div>

        {/* Kemari */}
        <div className="absolute left-[15%] top-[85%] md:left-[19%] md:top-[85%] lg:left-[18%] lg:top-[85%] xl:left-[24%] xl:top-[85%] 2xl:left-[25%] 2xl:top-[85%] text-center">
          <span className="lg:text-sm md:text-xs text-xs xl:text-sm 2xl:text-md font-semibold font-mont uppercase">SCHOOLS</span>
          <h2 className="lg:text-lg md:text-md text-xs xl:text-xl 2xl:text-2xl font-normal font-mont initial">Kemari District</h2>
        </div>

        {/* Karachi South */}
        <div className="absolute right-[25%] top-[97%] md:right-[34%] md:top-[99%] lg:right-[34%] lg:top-[99%] xl:right-[37%] xl:top-[99%] 2xl:right-[37%] 2xl:top-[99%] text-center">
          <span className="lg:text-sm md:text-xs text-xs xl:text-sm 2xl:text-md font-semibold font-mont uppercase">SCHOOLS</span>
          <h2 className="lg:text-lg md:text-md text-xs xl:text-xl 2xl:text-2xl font-normal font-mont initial">Karachi South District</h2>
        </div>

        {/* Korangi */}
        <div className="absolute right-[2%] bottom-[9%] md:right-[2%] md:bottom-[13%] lg:right-[2%] lg:bottom-[13%] xl:right-[10%] xl:bottom-[13%] 2xl:right-[10%] 2xl:bottom-[13%] text-center">
          <span className="lg:text-sm md:text-xs text-xs xl:text-sm 2xl:text-md font-semibold font-mont uppercase">SCHOOLS</span>
          <h2 className="lg:text-lg md:text-md text-xs xl:text-xl 2xl:text-2xl font-normal font-mont initial">Korangi District</h2>
        </div>

        {/* Cantonments */}
        <div className="absolute left-[80%] bottom-[45%] md:left-[87%] md:bottom-[50%] lg:left-[87%] lg:bottom-[50%] xl:left-[85%] xl:bottom-[50%] 2xl:left-[81%] 2xl:bottom-[50.5%] text-center">
          <span className="lg:text-sm md:text-xs text-xs xl:text-sm 2xl:text-md font-semibold font-mont uppercase">SCHOOLS</span>
          <h2 className="lg:text-lg md:text-md text-xs xl:text-xl 2xl:text-2xl font-normal font-mont initial">Cantonments</h2>
        </div>

        {/* Malir */}
        <div className="absolute right-[1%] bottom-[72%] md:right-[2%] md:bottom-[76%] lg:right-[2%] lg:bottom-[76%] xl:right-[10%] xl:bottom-[76%] 2xl:right-[12%] 2xl:bottom-[76%] text-center">
          <span className="lg:text-sm md:text-xs text-xs xl:text-sm 2xl:text-md font-semibold font-mont uppercase">SCHOOLS</span>
          <h2 className="lg:text-lg md:text-md text-xs xl:text-xl 2xl:text-2xl font-normal font-mont initial">Malir District</h2>
        </div>
      </div>
    </section>
  );
};

export default Location;
