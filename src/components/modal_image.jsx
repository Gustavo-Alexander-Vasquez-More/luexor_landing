import React, { useRef, useState } from 'react';
import catalogo from '../catalogo';

export default function ModalImage({ id, closeModal }) {
  const [nombre, setNombre]=useState()
const [correo, setCorreo]=useState()
const [mensaje, setMensaje]=useState()
  const catalogoo = catalogo?.map(dat => dat);
  const catalogo_filter=catalogoo.find(dat=>dat.id === id)
  const url_image=catalogo_filter.url
  const [isFormOpen, setIsFormOpen] = useState(false);
  const inputNombre=useRef()
  const inputCorreo=useRef()
  const inputMensaje=useRef()
  const captureNombre=()=>{
    setNombre(inputNombre.current.value)
    }
    const captureCorreo=()=>{
      setCorreo(inputCorreo.current.value)
      }
      const captureMensaje=()=>{
        setMensaje(inputMensaje.current.value)
      }
  const openForm = () => {
    setIsFormOpen(true); // Abre el formulario
  };

  const closeForm = () => {
    setIsFormOpen(false); // Cierra el formulario
  };

  const handleClickOutside = (e) => {
    if (e.target.id === 'form-container') {
      closeForm(); // Cierra el formulario cuando se hace clic fuera de él
    }
  };

  async function enviar(){
    try {
    if(!nombre || !correo || !mensaje){
    alert('Complete los campos para enviar su consulta.')
    }else{
      const encodedMessage = encodeURIComponent(`${mensaje}\n\nURL Imagen: ${url_image}\nDatos del cliente:\nNombre: ${nombre}\nCorreo electrónico: ${correo}`);
      
      const whatsappUrl = `https://api.whatsapp.com/send?phone=541124001758&text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
    }
    } catch (error) {
      console.log(error);
    }
    }

  return (
    <>
      {catalogoo
        .filter(dat => dat.id === id) // Filtramos la imagen seleccionada
        .map(dat => (
          <div
            key={dat.id}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex justify-center items-center"
          >
            <div className="relative  py-8 px-4 max-w-full max-h-full">
              {/* Opacidad de la imagen (solo afecta a la imagen detrás del formulario) */}
              {isFormOpen && (
                <div className="absolute inset-0 bg-black bg-opacity-50 z-40"></div>
              )}

              <img
                src={dat.image}
                alt={`Imagen-${dat.id}`}
                className="object-contain max-w-full max-h-[80vh] z-30" // Mantener la imagen detrás del formulario
              />

              {/* Botón de cierre */}
              <button
                onClick={closeModal}
                className="absolute top-[-4rem] lg:top-4 right-4 text-white font-bold text-2xl z-50"
              >
                X
              </button>

              {/* Mostrar el botón solo si el formulario no está abierto */}
              {!isFormOpen && (
                <button
                  onClick={openForm}
                  className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-[#FF4E00] border-solid border-[2px] botder-[white] text-white py-2 px-6 rounded-md font-semibold z-50"
                >
                  Cotizá sin cargo este modelo
                </button>
              )}

              {/* Formulario de presupuesto */}
              {isFormOpen && (
                <div
                  id="form-container"
                  className="absolute inset-0 flex justify-center items-center z-50"
                  onClick={handleClickOutside}
                >
                  <div className="bg-white rounded-[10px] z-50 px-[1.5rem] py-[1.5rem] w-[80%] lg:w-[50%] flex flex-col items-center">
                    <div className="mb-3 w-full">
                      <label htmlFor="name" className="form-label">Nombre completo</label>
                      <input
                        ref={inputNombre}
                        onChange={captureNombre}
                        type="text"
                        className="form-control w-full p-2 border border-gray-300 rounded"
                        id="name"
                        placeholder="Escriba su nombre"
                      />
                    </div>
                    <div className="mb-3 w-full">
                      <label htmlFor="email" className="form-label">Correo electrónico</label>
                      <input
                        ref={inputCorreo}
                        onChange={captureCorreo}
                        type="email"
                        className="form-control w-full p-2 border border-gray-300 rounded"
                        id="email"
                        placeholder="name@example.com"
                      />
                    </div>
                    <div className="mb-3 w-full">
                      <label htmlFor="message" className="form-label">Mensaje</label>
                      <textarea
                        ref={inputMensaje}
                        onChange={captureMensaje}
                        className="form-control w-full p-2 border border-gray-300 rounded"
                        id="message"
                        rows="3"
                        placeholder="Escriba su consulta"
                      ></textarea>
                    </div>
                    <button onClick={enviar} className="bg-black rounded-[5px] py-[0.5rem] font-semibold text-[white] w-full">
                      Enviar
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
    </>
  );
}
