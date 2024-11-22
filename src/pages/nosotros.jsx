import React from 'react';
import colocacion from '../images/colocacion.png'
import ReactPlayer from 'react-player/youtube';
import background from '../images/bakground3.png'
export default function nosotros() {
  return (
    <div className='w-full h-auto lg:h-screen bg-[black] flex lg:flex-row flex-col'>
      <div className='lg:w-[50%] h-screen px-[1rem] lg:pl-[4rem] lg:pr-[10rem] flex flex-col gap-3 justify-center '>
        <div className='flex flex-col'>
          <h1 className='text-[4rem] font-semibold text-[white] font-serif'>Acerca de</h1>
          <h1 className='text-[4rem] font-semibold text-[white] font-serif'>nosotros</h1>
        </div>
        <p className='font-semibold text-[white] text-[1.2rem]'>En Luxor, somos una empresa dedicada a la instalación de ventanas, mamparas y sistemas de vidrio, comprometida con la calidad y la innovación. Desde nuestros inicios, nos hemos enfocado en ofrecer soluciones de alto nivel que combinan estética y funcionalidad, adaptándonos a las necesidades de cada cliente y proyecto.</p>
      </div>
      <div className='lg:w-[50%] lg:h-screen lg:py-[2rem] flex flex-col justify-center gap-4 px-[1rem] lg:px-[4rem]'>
        <img  src={colocacion} className='w-full lg:flex hidden' alt="" />
        <div className='w-full '>
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=0dAtSDanrqE`} // Accede al primer elemento directamente
                controls={true}
                width={'100%'}
            />
        </div>
      </div>
    </div>
  );
}
