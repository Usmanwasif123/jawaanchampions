'use client'

import { useState } from 'react';
import { NAV_LINKS } from "@/constant";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar flexBetween max-container padding-container relative z-30 py-5 gap-5">
      <Link href="/">
        <img src="/jawan.png" alt="logo" width={100} height={50} />
      </Link>
      <ul
        className={`lg:flex lg:flex-grow xl:justify-center xl:items-end lg:justify-center justify-center items-center gap-12 transition-transform duration-300 ease-in-out ${
          menuOpen ? 'flex flex-col items-center absolute lg:h-[0] h-[500px] md:top-36 top-36 left-0 w-full h-screen bg-white z-20' : 'hidden'
        } xl:mt-[-2rem]`}>
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="bold-16 md:font-5 xl:bold-16 text-[#464646] text-center flexCenter uppercase cursor-pointer transition-all font-bold hover:text-green-60 font-boogaloo md:py-0 lg:py-0">
            {link.label}
          </Link>
        ))}
      </ul>

      <img
        src={menuOpen ? "/close.svg" : "/menu.svg"}
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
        style={{ filter: 'invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)' }}
      />
    </nav>
  );
};

export default Navbar;
