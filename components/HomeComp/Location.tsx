'use client';

import React from 'react';

const Location = () => {
  return (
    <section className="relative w-full pb-5 md:pb-20 p-5 md:p-0">
      {/* Title */}
      <h2 className="text-center mt-[-2rem] md:mt-[0rem] lg:mt-[0rem] xl:mt-[0rem] 2xl:mt-[0rem] lg:text-xl md:text-lg text-2xl xl:text-3xl 2xl:text-4xl text-[#006837] font-bold font-boogaloo uppercase mb-20">
        Footprint Across The City
      </h2>

      <div className="relative w-full flex justify-center">
        {/* Image */}
        <img
          src='/map.png'
          alt='Map'
          className="w-full h-full md:w-3/6 md:h-3/6"
        />
      </div>
    </section>
  );
};

export default Location;
