import React from 'react';
import colocacion from '../images/LUXOR CREW WEBPAGE 01.png'
import ReactPlayer from 'react-player/youtube';

export default function nosotros() {
  return (
    <div className='w-full h-auto  bg-[black] py-[2rem] flex lg:flex-row lg:gap-[0rem] gap-4 flex-col'>
      <div className='lg:w-[50%] h-auto  px-[1rem] lg:pl-[4rem] lg:pr-[10rem] flex flex-col gap-3 justify-center '>
        <div className='flex flex-col montserrat'>
          <h1 className='lg:text-[4rem] text-[3rem] font-semibold text-[white] font-serif'>Acerca de</h1>
          <h1 className='lg:text-[4rem] text-[3rem] font-semibold text-[white] font-serif'>nosotros</h1>
          
        </div>
        <p className=' text-[white] text-[1.1rem] lg:text-[1.2rem] montserrat'>En Aberturas Luxor, transformamos espacios con productos que combinan calidad, estética y funcionalidad. Ofrecemos ventanas, persianas, cortinas, mamparas, mosquiteros, puertas y más, adaptándonos a cada proyecto. Nos enfocamos en la excelencia y el diseño, garantizando acabados perfectos y espacios que inspiran. Elegí Luxor para dar a tus proyectos un toque de luz y lujo.</p>
        
      </div>
      <div className='lg:w-[50%] h-auto  lg:flex  flex-col lg:justify-center gap-4 px-[1rem] lg:px-[4rem]'>
        <img  src={colocacion} className='w-full hidden lg:flex' alt="" />
        <div className='w-full'>
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=847tJD1hppA`} // Accede al primer elemento directamente
                controls={true}
                width={'100%'}
                
            />
        </div>
      </div>
    </div>
  );
}
