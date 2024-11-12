import React from 'react';
import contact from '../images/contacto.png'
export default function contacto() {
  return (
    <div className='w-full h-screen'>
        <div className='w-full h-[40vh] bg-cover bg-center relative' style={{ backgroundImage: `url(${contact})` }}>
        <div className='bg-[#0000004b] w-full h-[40vh] flex justify-center items-center'>
          <p className='text-[3rem] font-semibold text-[white]'>Contáctanos</p>
        </div>
      </div>
      <div className='flex w-full h-[60vh]'>
        <div className='w-[50%] h-full flex justify-center items-center'></div>
        <div className='w-[50%] h-full flex justify-center items-center pr-[4rem] py-[2rem]'>
        <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13137.268167767637!2d-58.4274347!3d-34.5961437!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccba1d40b328b%3A0xeeb19d8de05a2f97!2sAberturas%20Luxor!5e0!3m2!1ses-419!2sar!4v1731380713022!5m2!1ses-419!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
}
