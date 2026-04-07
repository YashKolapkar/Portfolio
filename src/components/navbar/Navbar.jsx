import { RiMenu2Line,RiCloseLine } from '@remixicon/react';
import React, { useState } from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menu,openMenu] = useState(false);
  const [showMenu,setShowMenu] = useState(true);  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-wrap justify-between md:items-center bg-[#171d32]/95 px-10 py-4 text-white backdrop-blur-md md:px-20">
      <span className="text-xl font-bold tracking-wide">PortFolio</span>
      <ul className={` ${menu ? "block":"hidden" } 
        mx-24 py-2 mt-4 font-semibold md:mt-0 bg-black px-2 rounded-xl bg-opacity-20 md:border-none
        text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
        <Link to="home" smooth={true} duration={500} offset={-80} onClick={() => openMenu(false)}>
          <li className="text-md transition-all duration-300 p-1 md:p-0 cursor-pointer">Home</li>
        </Link>
        <Link to="about" smooth={true} duration={500} offset={-80} onClick={() => openMenu(false)}>
          <li className="text-md transition-all duration-300 p-1 md:p-0 cursor-pointer">About</li>
        </Link>
        <Link to="experience" smooth={true} duration={500} offset={-80} onClick={() => openMenu(false)}>
          <li className="text-md transition-all duration-300 p-1 md:p-0 cursor-pointer">Experience</li>
        </Link>
        <Link to="skills" smooth={true} duration={500} offset={-80} onClick={() => openMenu(false)}>
          <li className="text-md transition-all duration-300 p-1 md:p-0 cursor-pointer">Skills</li>
        </Link>
        <Link to="projects" smooth={true} duration={500} offset={-80} onClick={() => openMenu(false)}>
          <li className="text-md transition-all duration-300 p-1 md:p-0 cursor-pointer">Projects</li>
        </Link>
        <Link to="contact" smooth={true} duration={500} offset={-80} onClick={() => openMenu(false)}>
          <li className="text-md transition-all duration-300 p-1 md:p-0 cursor-pointer">Contact</li>
        </Link>
      </ul>
      {showMenu ? (
        <RiMenu2Line 
        size={30} 
        className="md:hidden absolute right-10 top-6 transition-all duration-300"
        onClick={()=>{
            openMenu(!menu); 
            setShowMenu(!showMenu);
        }}
        />
      ):(
      <RiCloseLine 
      size={30} 
      className="md:hidden absolute right-10 top-6 transition-all duration-300"
        />
      )}
    </nav>
  );
}

export default Navbar