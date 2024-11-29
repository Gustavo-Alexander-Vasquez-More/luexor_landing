import React from 'react';
import logo from '../images/logo2.png'
export default function burger_menu({closeMenu}) {
    const navigateSobreNosotros=()=>{
        document.body.style.overflow = ''
        closeMenu()
        const scrollTop = window.innerHeight * 0.85; 
          window.scrollTo({
            top: scrollTop,
            behavior: 'smooth' 
          });
        }
        const navigateServicios=()=>{
            closeMenu()
          document.body.style.overflow = ''
          const scrollTop = window.innerHeight * 1.80; 
            window.scrollTo({
              top: scrollTop,
              behavior: 'smooth' 
            });
          }
          const navigateInicio=()=>{
            closeMenu()
          document.body.style.overflow = ''
            const scrollTop = window.innerHeight * 0; // 20% de la altura de la ventana
              window.scrollTo({
                top: scrollTop,
                behavior: 'smooth' 
              });
            }
          const navigateContacto=()=>{
            closeMenu()
            document.body.style.overflow = ''
            const scrollTop = window.innerHeight * 6.55; // 20% de la altura de la ventana
              window.scrollTo({
                top: scrollTop,
                behavior: 'smooth' 
              });
            }
            const navigateTestimonios=()=>{
                closeMenu()
            document.body.style.overflow = ''
              const scrollTop = window.innerHeight * 5.47; // 20% de la altura de la ventana
                window.scrollTo({
                  top: scrollTop,
                  behavior: 'smooth' 
                });
              }
return (
<div className="fixed top-0 left-0 w-full h-screen z-50 bg-black gap-5 text-white flex flex-col py-[1rem] px-[1rem]  text-right  ">
    <div className='flex justify-between'>
        <img className='w-[10rem]' src={logo} alt="" />
    <button className=" top-5 right-5 text-white text-3xl text-right" onClick={closeMenu}>✕</button>
    </div>
    <div className='flex flex-col h-full  justify-between'>
        <div className='flex flex-col items-start gap-3'>
            <div className='flex gap-2 items-center'>
                <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
                </svg>
                <button onClick={navigateInicio} className="text-3xl font-bold">Inicio</button>
            </div>
            <div className='flex gap-2 items-center'>
                <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                </svg>
                <button onClick={navigateSobreNosotros} className="text-3xl font-bold">Nosotros</button>
            </div>
            <div className='flex gap-2 items-center'>
                <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.005 11.19V12l6.998 4.042L19 12v-.81M5 16.15v.81L11.997 21l6.998-4.042v-.81M12.003 3 5.005 7.042l6.998 4.042L19 7.042 12.003 3Z"/>
                </svg>
                <button onClick={navigateServicios} className="text-3xl font-bold">Catalogo</button>
            </div>
            <div className='flex gap-2 items-center'>
                <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"/>
                </svg>
                <button onClick={navigateTestimonios} className="text-3xl font-bold">Testimonios</button>
            </div>
            <div className='flex gap-2 items-center'>
                <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
                </svg>
                <button onClick={navigateContacto} className="text-3xl font-bold">Contacto</button>
            </div>
    
    
    
    </div>
    <div className='flex flex-col gap-2 text-center items-center'>
    
    <p className='text-[0.6rem]'>© copyrigth Luxor Aberturas. Todos los derechos reservados</p>
    <a className='text-[0.6rem] underline' href="">Desarrollado por Saeta Design®</a>
    </div>
    </div>
      {/* Agrega aquí los enlaces o el contenido del menú */}
    </div>
  );
}
