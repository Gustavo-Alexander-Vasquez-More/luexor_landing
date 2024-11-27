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
  const navigateSobreNosotros=()=>{
    
    const scrollTop = window.innerHeight * 1; 
      window.scrollTo({
        top: scrollTop,
        behavior: 'smooth' 
      });
    }
    const navigateServicios=()=>{
      
      const scrollTop = window.innerHeight * 1.85; 
        window.scrollTo({
          top: scrollTop,
          behavior: 'smooth' 
        });
      }
      const navigateInicio=()=>{
      
        const scrollTop = window.innerHeight * 0; // 20% de la altura de la ventana
          window.scrollTo({
            top: scrollTop,
            behavior: 'smooth' 
          });
        }
      const navigateContacto=()=>{
        
        const scrollTop = window.innerHeight * 4.65; // 20% de la altura de la ventana
          window.scrollTo({
            top: scrollTop,
            behavior: 'smooth' 
          });
        }
        const navigateTestimonios=()=>{
        
          const scrollTop = window.innerHeight * 3.80; // 20% de la altura de la ventana
            window.scrollTo({
              top: scrollTop,
              behavior: 'smooth' 
            });
          }
  return (
    <div
      className={`w-full flex fixed top-0 py-[1rem]  px-[4rem] z-30 transition-colors duration-300 ${isScrolled ? 'bg-[#000000ec] text-[#eb3500] ' : 'text-[white]  bg-transparent'}`}>
      <a className='w-[20%]' href="/"><img className="w-full" src={logo} alt="Logo" /></a>
      <div className='w-full flex justify-end items-center font-semibold text-[1.3rem] gap-5'>
      <button onClick={navigateInicio}>Inicio</button>
      <button onClick={navigateSobreNosotros}>Nosotros</button>
      <button onClick={navigateServicios}>Nuestros Servicios</button>
      <button onClick={navigateTestimonios}>Testimonios</button>
      <button onClick={navigateContacto}>Contacto</button>
      </div>
    </div>
  );
}
