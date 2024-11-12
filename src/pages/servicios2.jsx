import React from 'react';
import mamparas from '../images/mamparas.png'
import persianas from '../images/persianas.png'
import puertas from '../images/puertas.png'

import corredizos from '../images/corredizos.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default function servicios2() {
  return (
    <div className='w-full h-screen bg-[#ECECEC] flex'>
      <div className='w-[50%] h-screen flex flex-col gap-4 justify-center items-center'>
      <div className='flex flex-col items-center gap-4 px-[4rem]'>
            <p className='text-[#EB3500] font-bold text-[1.3rem]'>Corredizos</p>
            <Carousel showArrows showStatus={false} infiniteLoop showThumbs={false} className='w-full '>
              <img className='w-full h-[37vh]' src={corredizos} alt="" />
              <img className='w-full h-[37vh]' src={corredizos} alt="" />
              <img className='w-full h-[37vh]' src={corredizos} alt="" />
              <img className='w-full h-[37vh]' src={corredizos} alt="" />
              <img className='w-full h-[37vh]' src={corredizos} alt="" />
            </Carousel>
          </div>
          <div className='flex flex-col items-center gap-4 px-[4rem]'>
            <p className='text-[#EB3500] font-bold text-[1.3rem]'>Corredizos</p>
            <Carousel showArrows showStatus={false} infiniteLoop showThumbs={false} className='w-full '>
              <img className='w-full h-[37vh]' src={corredizos} alt="" />
              <img className='w-full h-[37vh]' src={corredizos} alt="" />
              <img className='w-full h-[37vh]' src={corredizos} alt="" />
              <img className='w-full h-[37vh]' src={corredizos} alt="" />
              <img className='w-full h-[37vh]' src={corredizos} alt="" />
            </Carousel>
          </div>
      </div>
      <div className='w-[50%] h-screen flex flex-col gap-4 justify-center items-center'>
      <div className='flex flex-col items-center gap-4 px-[4rem]'>
            <p className='text-[#EB3500] font-bold text-[1.3rem]'>Corredizos</p>
            <Carousel showArrows showStatus={false} infiniteLoop showThumbs={false} className='w-full '>
              <img className='w-full h-[37vh]' src={corredizos} alt="" />
              <img className='w-full h-[37vh]' src={corredizos} alt="" />
              <img className='w-full h-[37vh]' src={corredizos} alt="" />
              <img className='w-full h-[37vh]' src={corredizos} alt="" />
              <img className='w-full h-[37vh]' src={corredizos} alt="" />
            </Carousel>
          </div>
          <div className='flex flex-col items-center gap-4 px-[4rem]'>
            <p className='text-[#EB3500] font-bold text-[1.3rem]'>Corredizos</p>
            <Carousel showArrows showStatus={false} infiniteLoop showThumbs={false} className='w-full '>
              <img className='w-full h-[37vh]' src={corredizos} alt="" />
              <img className='w-full h-[37vh]' src={corredizos} alt="" />
              <img className='w-full h-[37vh]' src={corredizos} alt="" />
              <img className='w-full h-[37vh]' src={corredizos} alt="" />
              <img className='w-full h-[37vh]' src={corredizos} alt="" />
            </Carousel>
          </div>
      </div>
    </div>
  );
}
