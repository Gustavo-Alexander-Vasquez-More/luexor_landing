import React, { useState } from 'react';
import services from '../images/familia.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import mosquiteros from '../images/mosquiteros.png';
import corredizos from '../images/corredizos.png';

export default function Servicios() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const mosquiterosImages = [mosquiteros, mosquiteros, mosquiteros, mosquiteros, mosquiteros];
  const corredizosImages = [corredizos, corredizos, corredizos, corredizos, corredizos];

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <div className='w-full h-auto bg-[#ECECEC] flex flex-col'>
      <div className='w-full h-[40vh] bg-cover relative' style={{ backgroundImage: `url(${services})` }}>
        <div className='bg-[#0000004b] w-full h-[40vh] flex justify-center items-center'>
          <p className='text-[3rem] font-semibold text-[white]'>Nuestros servicios</p>
        </div>
      </div>
      <div className='flex pt-[2rem]'>
        <div className='w-[50%] h-full flex justify-center items-center'>
          <div className='flex flex-col items-center gap-4 px-[4rem]'>
            <p className='text-[#EB3500] font-bold text-[1.3rem]'>Mosquiteros</p>
            <Carousel showArrows={true} showStatus={false} infiniteLoop showThumbs={false} className='w-full '>
              {mosquiterosImages.map((image, index) => (
                <img
                  key={index}
                  className='w-full h-[40vh]'
                  src={image}
                  alt={`mosquiteros-${index}`}
                  onClick={() => openModal(image)}
                />
              ))}
            </Carousel>
          </div>
        </div>
        <div className='w-[50%] h-full flex justify-center items-center'>
          <div className='flex flex-col items-center gap-4 px-[4rem]'>
            <p className='text-[#EB3500] font-bold text-[1.3rem]'>Corredizos</p>
            <Carousel showArrows showStatus={false} infiniteLoop showThumbs={false} className='w-full '>
              {corredizosImages.map((image, index) => (
                <button className='w-full' onClick={() => openModal(image)}><img key={index} className='w-full h-[40vh]' src={image} alt={`corredizos-${index}`} /></button>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <div className='flex pt-[2rem]'>
        <div className='w-[50%] h-full flex justify-center items-center'>
          <div className='flex flex-col items-center gap-4 px-[4rem]'>
            <p className='text-[#EB3500] font-bold text-[1.3rem]'>Mosquiteros</p>
            <Carousel showArrows={true} showStatus={false} infiniteLoop showThumbs={false} className='w-full '>
              {mosquiterosImages.map((image, index) => (
                <img
                  key={index}
                  className='w-full h-[40vh]'
                  src={image}
                  alt={`mosquiteros-${index}`}
                  onClick={() => openModal(image)}
                />
              ))}
            </Carousel>
          </div>
        </div>
        <div className='w-[50%] h-full flex justify-center items-center'>
          <div className='flex flex-col items-center gap-4 px-[4rem]'>
            <p className='text-[#EB3500] font-bold text-[1.3rem]'>Corredizos</p>
            <Carousel showArrows showStatus={false} infiniteLoop showThumbs={false} className='w-full '>
              {corredizosImages.map((image, index) => (
                <button className='w-full' onClick={() => openModal(image)}><img key={index} className='w-full h-[40vh]' src={image} alt={`corredizos-${index}`} /></button>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <div className='flex pt-[2rem]'>
        <div className='w-[50%] h-full flex justify-center items-center'>
          <div className='flex flex-col items-center gap-4 px-[4rem]'>
            <p className='text-[#EB3500] font-bold text-[1.3rem]'>Mosquiteros</p>
            <Carousel showArrows={true} showStatus={false} infiniteLoop showThumbs={false} className='w-full '>
              {mosquiterosImages.map((image, index) => (
                <img
                  key={index}
                  className='w-full h-[40vh]'
                  src={image}
                  alt={`mosquiteros-${index}`}
                  onClick={() => openModal(image)}
                />
              ))}
            </Carousel>
          </div>
        </div>
        <div className='w-[50%] h-full flex justify-center items-center'>
          <div className='flex flex-col items-center gap-4 px-[4rem]'>
            <p className='text-[#EB3500] font-bold text-[1.3rem]'>Corredizos</p>
            <Carousel showArrows showStatus={false} infiniteLoop showThumbs={false} className='w-full '>
              {corredizosImages.map((image, index) => (
                <button className='w-full' onClick={() => openModal(image)}><img key={index} className='w-full h-[40vh]' src={image} alt={`corredizos-${index}`} /></button>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      {/* Modal de imagen */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={closeModal}>
          <div className="relative">
            <img className="max-w-[90vw] max-h-[90vh] object-contain" src={modalImage} alt="Modal Image" />
            <button
              className="absolute top-0 right-0 p-1 text-[#000000ab] bg-[white] text-3xl"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
