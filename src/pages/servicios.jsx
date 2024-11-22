import React, { useState } from 'react';
import services from '../images/familia.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import background from '../images/servicios_background.png'
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
<div className='w-full h-auto flex flex-col py-[2rem] bg-cover bg-no-repeat ' style={{ backgroundImage: `url(${background})` }} >
  <div className='w-full flex flex-col items-center h-auto pb-[2rem] text-white'>
    <p className='font-sans text-[3.5rem] font-bold'>Nuestros servicios</p>
    <p>- Algunos de nuestros trabajos realizados -</p>
    </div>
    <div className='w-full flex flex-wrap'>
  {/* Carrusel 1 */}
  <div className='flex flex-col items-center gap-4 px-[1rem] lg:px-[4rem] lg:pb-[2rem] pb-[2rem] w-full lg:w-1/2'>
    <p className='text-[white] font-bold text-[1.3rem] underline'>Mosquiteros 1</p>
    <Carousel showArrows={true} showStatus={false} infiniteLoop showThumbs={false} className='w-full'>
      {mosquiterosImages.map((image, index) => (
        <img key={index} className='w-full h-[40vh]' src={image} alt={`mosquiteros-1-${index}`} onClick={() => openModal(image)} />
      ))}
    </Carousel>
  </div>

  {/* Carrusel 2 */}
  <div className='flex flex-col items-center gap-4 px-[1rem] lg:px-[4rem] lg:pb-[2rem] pb-[2rem] w-full lg:w-1/2'>
    <p className='text-[white] font-bold text-[1.3rem] underline'>Mosquiteros 2</p>
    <Carousel showArrows={true} showStatus={false} infiniteLoop showThumbs={false} className='w-full'>
      {mosquiterosImages.map((image, index) => (
        <img key={index} className='w-full h-[40vh]' src={image} alt={`mosquiteros-2-${index}`} onClick={() => openModal(image)} />
      ))}
    </Carousel>
  </div>

  {/* Carrusel 3 */}
  <div className='flex flex-col items-center gap-4 px-[1rem] lg:px-[4rem] lg:pb-[2rem] pb-[2rem] w-full lg:w-1/2'>
    <p className='text-[white] font-bold text-[1.3rem] underline'>Mosquiteros 3</p>
    <Carousel showArrows={true} showStatus={false} infiniteLoop showThumbs={false} className='w-full'>
      {mosquiterosImages.map((image, index) => (
        <img key={index} className='w-full h-[40vh]' src={image} alt={`mosquiteros-3-${index}`} onClick={() => openModal(image)} />
      ))}
    </Carousel>
  </div>

  {/* Carrusel 4 */}
  <div className='flex flex-col items-center gap-4 px-[1rem] lg:px-[4rem] lg:pb-[2rem] pb-[2rem] w-full lg:w-1/2'>
    <p className='text-[white] font-bold text-[1.3rem] underline'>Mosquiteros 4</p>
    <Carousel showArrows={true} showStatus={false} infiniteLoop showThumbs={false} className='w-full'>
      {mosquiterosImages.map((image, index) => (
        <img key={index} className='w-full h-[40vh]' src={image} alt={`mosquiteros-4-${index}`} onClick={() => openModal(image)} />
      ))}
    </Carousel>
  </div>

  {/* Carrusel 5 */}
  <div className='flex flex-col items-center gap-4 px-[1rem] lg:px-[4rem] lg:pb-[2rem] pb-[2rem] w-full lg:w-1/2'>
    <p className='text-[white] font-bold text-[1.3rem] underline'>Mosquiteros 5</p>
    <Carousel showArrows={true} showStatus={false} infiniteLoop showThumbs={false} className='w-full'>
      {mosquiterosImages.map((image, index) => (
        <img key={index} className='w-full h-[40vh]' src={image} alt={`mosquiteros-5-${index}`} onClick={() => openModal(image)} />
      ))}
    </Carousel>
  </div>
  {/* Carrusel 6 */}
  <div className='flex flex-col items-center gap-4 px-[1rem] lg:px-[4rem] lg:pb-[2rem] pb-[2rem] w-full lg:w-1/2'>
    <p className='text-[white] font-bold text-[1.3rem] underline'>Mosquiteros 5</p>
    <Carousel showArrows={true} showStatus={false} infiniteLoop showThumbs={false} className='w-full'>
      {mosquiterosImages.map((image, index) => (
        <img key={index} className='w-full h-[40vh]' src={image} alt={`mosquiteros-5-${index}`} onClick={() => openModal(image)} />
      ))}
    </Carousel>
  </div>
</div>
</div>
  );
}
