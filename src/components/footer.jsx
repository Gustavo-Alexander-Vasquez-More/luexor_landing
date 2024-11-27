import React, { useEffect } from 'react';
import logo from '../images/logo_footer.png'
import insta from '../images/insta.png'
import you from '../images/you.webp'
import face from '../images/face.png'
export default function footer() {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(tooltipTriggerEl => {
      new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);
  const navigateInicio=()=>{
      
    const scrollTop = window.innerHeight * 0; // 20% de la altura de la ventana
      window.scrollTo({
        top: scrollTop,
        behavior: 'smooth' 
      });
    }
  return (
    <div className='w-full  bg-[black] text-white px-[1rem] lg:px-[4rem] flex flex-col gap-2'>
      <div className='flex lg:flex-row flex-col py-[2rem] items-center gap-3 justify-between'>
        <div className='flex items-center gap-5'>
        <div className='h-[20vh] flex gap-5'>
          <button onClick={navigateInicio} className='w-[10rem]'><img className="lg:w-full w-[50%]" src={logo} alt="" /></button>
          <div className='w-[0.2rem] h-full bg-white'></div>
        </div>
        <div className='flex flex-col items-start gap-2'>
            <p className='font-semibold text-[1.2rem] text-center flex items-center lg:text-start gap-2'>Horarios de atención <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd"/>
</svg>
</p>
            <div className='flex flex-col text-[0.9rem]'>
              <p>Lunes a Viernes de 09:00 a 17:00 Hs</p>
              <p>Sábados de 10:00 a 14:00 Hs</p>
            </div>
        </div>
        </div>
        <div className='flex lg:flex-row gap-[5rem]'>
        <div className='flex flex-col items-center gap-2'>
            <p className='font-semibold flex text-[1.2rem] text-center items-center lg:text-center gap-2'>
              Atención al cliente
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
              </svg>
            </p>
            <div className='flex flex-col text-center text-[0.9rem]'>
              <p>Lunes a Viernes de 09:00 a 17:00 Hs</p>
              <p>Sábados de 10:00 a 14:00 Hs</p>
            </div>
        </div>
          <div className='flex flex-col items-center gap-2'>
            <p className=' font-semibold text-[1.2rem] items-center gap-2 text-center flex lg:text-start'>Visitá nuestras redes <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"/>
</svg>
</p>
            <div className='flex gap-3 '>
              <a target='_blank' href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Faberturas.luxor%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR0ELVizjSg-N6bZtr9mmuwCn1HtgF5eM5cDGPqMD8n8O-y0CKpzeA9T8Iw_aem_c43rXMD2UaSRxURxrz0sug&h=AT0CNC9FBH_zdbhq31QL9Ee1BZL10tEeA8mVswE8Tp_nzRWo4-AEOvb8vVHfzqKCgI0tWmTCGNrZqGrYfLz3ujFoTm05HTjydxrUPcCuztV2O-dn_Dy2FamLgB4DgUT3Ps6p9E5jsKoBMiJOUeKN"><img className='w-[2rem]' src={insta} alt="" /></a>
              <a target='_blank' href='https://www.facebook.com/aberturas.luxor'><img className='w-[2rem]' src={face} alt="" /></a>
              <a target='_blank' href='/'><img className='w-[2rem]' src={you} alt="" /></a>
            </div>
        </div>
        </div>
      </div>
      <div className='flex items-center flex-col  text-[white] text-[0.6rem] lg:text-[0.8rem]'>
        <p className='text-center'>© copyrigth Luxor Aberturas. Todos los derechos reservados</p>
        <a target='_blank' href='https://www.facebook.com/profile.php?id=61569764181210' className='underline'>Desarrollado por Saeta Design®</a>
      </div>
    </div>
  );
}
