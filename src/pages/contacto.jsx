import React from 'react';
import contact from '../images/contacto.png'
import background from '../images/contacto_background.png'
export default function contacto() {
  return (
    <div className='w-full h-auto flex lg:flex-row flex-col py-[2rem] bg-center bg-no-repeat bg-cover' style={{ backgroundImage: `url(${background})` }}>
      <div className='flex lg:flex-row flex-col w-full'>
        <div className='lg:w-[50%] w-full  flex flex-col justify-center items-start gap-4 px-[1rem] lg:px-[4rem]'>
          <p className='lg:text-[3.5rem] text-[2.5rem] font-semibold text-white'>Contactanos</p>
       
          {/* DIRECCION */}
        <div className='flex gap-3 items-center'>
          <svg className="w-[4rem] h-[4rem] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"/>
            </svg>
          <div className='flex flex-col text-white'>
            <p className='font-semibold text-[1.3rem]'>Dirección:</p>
            <p>Av. Córdoba 4318, CABA C1414 </p>
          </div>
        </div>
        {/* TELEFONO */}
        <div className='flex gap-3 items-center'>
        <svg class="w-[4rem] h-[4rem] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>
            <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
          </svg>
         
          <div className='flex flex-col text-white'>
            <p className='font-semibold text-[1.3rem]'>Whatsapp:</p>
            <p>+54 11 2400 1758</p>
            <p>+54 11 7162 0611</p>
          </div>
        </div>
        {/* CORREO */}
        <div className='flex gap-3 items-center'>
          <svg className="w-[4rem] h-[4rem] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
          </svg>
          <div className='flex flex-col text-white'>
            <p className='font-semibold text-[1.3rem]'>Correo electrónico:</p>
            <p>aberturas.luxor@gmail.com</p>
          </div>
        </div>
        </div>
        <div className='lg:w-[50%] w-full h-full flex justify-center items-center px-[1rem] lg:pr-[4rem]'>
        <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13137.268167767637!2d-58.4274347!3d-34.5961437!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccba1d40b328b%3A0xeeb19d8de05a2f97!2sAberturas%20Luxor!5e0!3m2!1ses-419!2sar!4v1731380713022!5m2!1ses-419!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
}
