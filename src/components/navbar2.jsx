import React, { useEffect, useState } from 'react';
import logo from '../images/logo2.png';

export default function navbar2() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50); // Cambia a oscuro después de 50px de desplazamiento
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
  return (
    <div
      className={`w-full flex justify-between fixed top-0 py-[1rem]  px-[1rem] z-30 transition-colors duration-300 ${isScrolled ? 'bg-[#000000ec] text-[#eb3500] ' : 'text-[white]  bg-transparent'}`}>
      <img className="w-[50%]" src={logo} alt="Logo" />
      <button>
      <svg class="w-10 h-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
</svg>

      </button>
    </div>
  );
}