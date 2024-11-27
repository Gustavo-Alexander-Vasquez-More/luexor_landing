import React, { useEffect } from 'react';
import google from '../images/google.png'
import star from '../images/star.png'
import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import reseñas_api from '../reseñas.js'
export default function reseñas() {
const responsive ={
desktop: {
    breakpoint: { max: 3000, min: 1279 },
    items: 4,
},
laptop: {
    breakpoint: { max: 1279, min: 1024 },
    items: 4,
},
tablet: {
    breakpoint: { max: 1023, min: 464 },
    items: 2,
},
mobile: {
    breakpoint: { max: 463, min: 0 },
    items: 1,
}};
const reseñas_map=Array.isArray(reseñas_api) ? reseñas_api.map(dat=>dat) : []

useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(tooltipTriggerEl => {
    new window.bootstrap.Tooltip(tooltipTriggerEl);
});}, []);
  return (
    <div className='w-full lg:h-[90vh] h-auto bg-[black] flex flex-col justify-between gap-5 lg:gap-0 py-[2rem] lg:py-[4rem] px-[1rem] lg:px-[4rem]'>
        <div className=' text-[2rem] text-[white] font-semibold'>
            <p>"En Luxor, la satisfacción de nuestros clientes es</p>
            <p>nuestra mejor recomendación</p>
        </div>
        <div className='w-full bg-[#E0D2A3] py-[2rem] lg:flex-row flex-col lg:gap-0 gap-4 flex px-[2rem] rounded-[15px] items-center justify-between'>
            <div className='flex flex-col'>
                <div className='flex items-center gap-1'>
                    <img className='w-[7rem]' src={google} alt="" />
                    <p className='text-[1.5rem] font-semibold'>Reviews</p>
                </div>
                <div className='flex gap-2'>
                    <img className='w-[2rem] h-[2rem]' src={star} alt="" />
                    <img className='w-[2rem] h-[2rem]' src={star} alt="" />
                    <img className='w-[2rem] h-[2rem]' src={star} alt="" />
                    <img className='w-[2rem] h-[2rem]' src={star} alt="" />
                    <img className='w-[2rem] h-[2rem]' src={star} alt="" />
                </div>
            </div>
            <a href='https://search.google.com/local/writereview?placeid=ChIJizIL1KHLvJURly9a4I2dse4'  data-bs-toggle="tooltip" data-bs-title="Tu opinión nos motiva 🧡" className='bg-primary text-[white] font-semibold px-[1rem] lg:px-[2rem]  text-center items-center flex lg:text-[1.2rem] h-[3rem] rounded-[5px]'>Dejanos tu testimonio</a>
        </div>
        <CarouselMulti 
  responsive={responsive} 
  className="flex items-center z-10" 
  autoPlay 
  infinite={true}
>
  {reseñas_map.map(dat => (
    <a target='_blank' href={dat.url_opinion} className='text-start'>
        <div className="flex flex-col items-center gap-1 card h-[36vh] bg-[#E0D2A3] mx-3 py-[1rem] px-[1rem]">
      <div className='flex w-full gap-2'>
      <img src={dat.url} alt={dat.name} className="w-8 h-8 rounded-full object-cover" />
        <div className='flex flex-col text-[0.7rem]'>
            <p className='font-semibold text-[0.8rem]'>{dat.name}</p>
            {dat.tipo === 'Local Guide' && (
                <p>{dat.tipo}</p>
            )}
        </div>
      </div>
      <div className='flex w-full items-center gap-2'>
        
        <div className='flex gap-1'>
            <img className='w-[0.7rem] h-[0.7rem]' src={star} alt="" />
            <img className='w-[0.7rem] h-[0.7rem]' src={star} alt="" />
            <img className='w-[0.7rem] h-[0.7rem]' src={star} alt="" />
            <img className='w-[0.7rem] h-[0.7rem]' src={star} alt="" />
            <img className='w-[0.7rem] h-[0.7rem]' src={star} alt="" />
        </div>
      </div>
      <div className='w-full flex text-[0.8rem]'>
        <p>{dat.message}</p>
      </div>
    </div>
    </a>
  ))}
</CarouselMulti>
        
    </div>
  );
}
// API_KKEY=AIzaSyCJ1BOW_UGMTCbqO4VkVVbKK0WqotldVe8