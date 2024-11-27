import React, { useState } from 'react';
import services from '../images/familia.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import background from '../images/servicios_background.png'
import catalogo from '../../src/catalogo.js'
import Modal_image from '../components/modal_image.jsx';
export default function Servicios() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  console.log(modalImage);

  const catalogoo=catalogo?.map(dat=>dat)
  const persianas=catalogoo.filter(dat=>dat.tipo === 'persianas')
  const puertas=catalogoo.filter(dat=>dat.tipo === 'puertas')
  const mamparas=catalogoo.filter(dat=>dat.tipo === 'mamparas')
  const ventanas=catalogoo.filter(dat=>dat.tipo === 'ventanas')
  const roller=catalogoo.filter(dat=>dat.tipo === 'roller')
  const mosquiteros=catalogoo.filter(dat=>dat.tipo === 'mosquiteros')

  const openModal = (id) => {
    setModalImage(id);
    setIsModalOpen(true);
    // Bloquear el scroll
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
    // Desbloquear el scroll
    document.body.style.overflow = '';
  };

return (
<>
{isModalOpen === true && (
 <Modal_image id={modalImage} closeModal={closeModal}/>
)}
<div className='w-full h-auto flex flex-col py-[2rem] bg-cover bg-no-repeat ' style={{ backgroundImage: `url(${background})` }} >
  <div className='w-full flex flex-col items-center h-auto pb-[2rem] text-white'>
    <p className='font-sans text-[3.5rem] font-bold'>Nuestros servicios</p>
    <p>- Algunos de nuestros trabajos realizados -</p>
    </div>
    <div className='w-full flex flex-wrap'>
  {/* Carrusel 1 */}
  <div className='flex flex-col items-center gap-4 px-[1rem] lg:px-[4rem] lg:pb-[2rem] pb-[2rem] w-full lg:w-1/2'>
    <p className='text-[white] font-bold text-[1.3rem] underline'>Ventanas / Ventanales corredizos</p>
    <Carousel showArrows={true} showStatus={false} infiniteLoop showThumbs={false} className='w-full'>
      {ventanas.map((image, index) => (
        <button  className='w-full' onClick={() => openModal(image.id)} >
          <img key={index} className='w-full h-[40vh] object-cover' src={image.image} alt={`mosquiteros-5-${index}`}/>
        </button>
      ))}
    </Carousel>
  </div>

  {/* Carrusel 2 */}
  <div className='flex flex-col items-center gap-4 px-[1rem] lg:px-[4rem] lg:pb-[2rem] pb-[2rem] w-full lg:w-1/2'>
    <p className='text-[white] font-bold text-[1.3rem] underline'>Mosquiteros</p>
    <Carousel showArrows={true} showStatus={false} infiniteLoop showThumbs={false} className='w-full'>
      {mosquiteros.map((image, index) => (
        <button  className='w-full' onClick={() => openModal(image.id)} >
          <img key={index} className='w-full h-[40vh] object-cover' src={image.image} alt={`mosquiteros-5-${index}`}/>
        </button>
      ))}
    </Carousel>
  </div>

  {/* Carrusel 3 */}
  <div className='flex flex-col items-center gap-4 px-[1rem] lg:px-[4rem] lg:pb-[2rem] pb-[2rem] w-full lg:w-1/2'>
    <p className='text-[white] font-bold text-[1.3rem] underline'>Puertas</p>
    <Carousel showArrows={true} showStatus={false} infiniteLoop showThumbs={false} className='w-full'>
      {puertas.map((image, index) => (
        <button  className='w-full' onClick={() => openModal(image.id)} >
          <img key={index} className='w-full h-[40vh] object-cover' src={image.image} alt={`mosquiteros-5-${index}`}/>
        </button>
      ))}
    </Carousel>
  </div>

  {/* Carrusel 4 */}
  <div className='flex flex-col items-center gap-4 px-[1rem] lg:px-[4rem] lg:pb-[2rem] pb-[2rem] w-full lg:w-1/2'>
    <p className='text-[white] font-bold text-[1.3rem] underline'>Mamparas</p>
    <Carousel showArrows={true} showStatus={false} infiniteLoop showThumbs={false} className='w-full'>
      {mamparas.map((image, index) => (
        <button  className='w-full' onClick={() => openModal(image.id)} >
          <img key={index} className='w-full h-[40vh] object-cover' src={image.image} alt={`mosquiteros-5-${index}`}/>
        </button>
      ))}
    </Carousel>
  </div>

  {/* Carrusel 5 */}
  <div className='flex flex-col items-center gap-4 px-[1rem] lg:px-[4rem] lg:pb-[2rem] pb-[2rem] w-full lg:w-1/2'>
    <p className='text-[white] font-bold text-[1.3rem] underline'>Persianas</p>
    <Carousel showArrows={true} showStatus={false} infiniteLoop showThumbs={false} className='w-full'>
      {persianas.map((image, index) => (
        <button  className='w-full' onClick={() => openModal(image.id)} >
          <img key={index} className='w-full h-[40vh] object-cover' src={image.image} alt={`mosquiteros-5-${index}`}/>
        </button>
      ))}
    </Carousel>
  </div>
  {/* Carrusel 6 */}
  <div className='flex flex-col items-center gap-4 px-[1rem] lg:px-[4rem] lg:pb-[2rem] pb-[2rem] w-full lg:w-1/2'>
    <p className='text-[white] font-bold text-[1.3rem] underline'>Cortinas Roller</p>
    <Carousel showArrows={true} showStatus={false} infiniteLoop showThumbs={false} className='w-full'>
      {roller.map((image, index) => (
        <button  className='w-full' onClick={() => openModal(image.id)} >
          <img key={index} className='w-full h-[40vh] object-cover' src={image.image} alt={`mosquiteros-5-${image.image}`}/>
        </button>
      ))}
    </Carousel>
  </div>
</div>
</div>
</>
  );
}
