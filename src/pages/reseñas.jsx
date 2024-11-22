import React, { useEffect } from 'react';
import google from '../images/google.png'
import star from '../images/star.png'
export default function reseñas() {
    useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        tooltipTriggerList.forEach(tooltipTriggerEl => {
          new window.bootstrap.Tooltip(tooltipTriggerEl);
        });
      }, []);
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
            <a href='https://search.google.com/local/writereview?placeid=ChIJizIL1KHLvJURly9a4I2dse4'  data-bs-toggle="tooltip" data-bs-title="Tu opinión nos motiva 🧡" className='bg-primary text-[white] font-semibold px-[1rem] lg:px-[2rem]  text-center items-center flex lg:text-[1.2rem] h-[3rem] rounded-[5px]'>Dejános tu testimonio</a>
        </div>
        <div className='w-full gap-4 lg:flex hidden'>
            <div className='w-full h-[25vh] rounded-[10px] bg-[#E0D2A3]'></div>
            <div className='w-full h-[25vh] rounded-[10px] bg-[#E0D2A3]'></div>
            <div className='w-full h-[25vh] rounded-[10px] bg-[#E0D2A3]'></div>
        </div>
        <div className='w-full flex lg:hidden'>
            <div className='w-full h-[25vh] rounded-[10px] bg-[#E0D2A3]'></div>
        </div>
    </div>
  );
}
// API_KKEY=AIzaSyCJ1BOW_UGMTCbqO4VkVVbKK0WqotldVe8