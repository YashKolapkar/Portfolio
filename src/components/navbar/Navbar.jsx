import { RiMenu2Line,RiCloseLine } from '@remixicon/react';
import React, { useState } from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  const [menu,openMenu] = useState(false);
  const [showMenu,setShowMenu] = useState(true);  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-wrap justify-between md:items-center bg-[#171d32]/95 px-10 py-4 text-white backdrop-blur-md md:px-20">
      <span className="text-xl font-bold tracking-wide">PortFolio</span>
      <ul className={` ${menu ? "block":"hidden" } 
        mx-24 py-2 mt-4 font-semibold md:mt-0 bg-black px-2 rounded-xl bg-opacity-20 md:border-none
        text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
        <NavLink to="/"><li className="text-md transition-all duration-300 p-1 md:p-0">Home</li></NavLink>
        <NavLink to="/about"><li className="text-md transition-all duration-300 p-1 md:p-0">About</li></NavLink>
        <NavLink to="/experience"><li className="text-md transition-all duration-300 p-1 md:p-0">Experience</li></NavLink>
        <NavLink to="/projects"><li className="text-md transition-all duration-300 p-1 md:p-0">Projects</li></NavLink>
        <NavLink to="/contact"><li className="text-md transition-all duration-300 p-1 md:p-0">Contact</li></NavLink>
      
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