import React from 'react';
import google from '../images/google.png'
import star from '../images/star.png'
export default function reseñas() {
  return (
    <div className='w-full h-[90vh] bg-[#ECECEC] flex flex-col justify-between py-[4rem] px-[4rem]'>
        <div className='text-[2rem] font-semibold'>
            <p>"La satisfacción de nuestros clientes es</p>
            <p>nuestra mejor recomendación</p>
        </div>
        <div className='w-full bg-[white] py-[2rem] flex px-[2rem] rounded-[15px] items-center justify-between'>
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
            <a href='https://search.google.com/local/writereview?placeid=ChIJizIL1KHLvJURly9a4I2dse4' className='bg-primary text-[white] font-semibold px-[2rem]  text-center items-center flex text-[1.2rem] h-[3rem] rounded-[5px]'>Dejá tu reseña</a>
        </div>
        <div className='w-full flex gap-4'>
            <div className='w-full h-[25vh] rounded-[10px] bg-white'></div>
            <div className='w-full h-[25vh] rounded-[10px] bg-white'></div>
            <div className='w-full h-[25vh] rounded-[10px] bg-white'></div>
        </div>
    </div>
  );
}
// API_KKEY=AIzaSyCJ1BOW_UGMTCbqO4VkVVbKK0WqotldVe8