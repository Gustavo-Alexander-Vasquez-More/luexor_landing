import React, { useState, useEffect } from 'react';
import logo from '../images/logo2.png';

export default function Navbar() {
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
      className={`w-full flex fixed top-0 py-[1rem]  px-[4rem] z-30 transition-colors duration-300 ${isScrolled ? 'bg-[#000000ec] text-[#eb3500] ' : 'text-[white]  bg-transparent'}`}>
      <img className="w-[20%]" src={logo} alt="Logo" />
      <div className='w-full flex justify-end items-center font-semibold text-[1.3rem] gap-5'>
        <a href="">Inicio</a>
        <a href="">Nosotros</a>
        <a href="">Nuestros Servicios</a>
        <a href="">Contacto</a>
      </div>
    </div>
  );
}
