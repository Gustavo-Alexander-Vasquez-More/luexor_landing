import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar2 from "../components/navbar2.jsx";
import Navbar from "../components/navbar.jsx";
import Nosotros from "./nosotros";
import Servicios from "./servicios";
import Footer from "../components/footer";
import Reseñas from "../pages/reseñas.jsx";
import Contacto from "./contacto";
import '../fonts/fonts.css'
import background from '../images/bakground.png'
export default function Index() {
const navigate=useNavigate()
const [nombre, setNombre]=useState()
const [correo, setCorreo]=useState()
const [mensaje, setMensaje]=useState()

const [showNavbar, setShowNavbar] = useState(true); 
const [showForm, setShowForm] = useState(false);
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

async function enviar(){
try {
if(!nombre || !correo || !mensaje){
alert('Por favor, complete todos los campos del formulario para enviar su consulta.')
}else{
  const encodedMessage = encodeURIComponent(`${mensaje}\n\nDatos del cliente:\nNombre: ${nombre}\nCorreo electrónico: ${correo}`);
  
  const whatsappUrl = `https://api.whatsapp.com/send?phone=541124001758&text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
}
} catch (error) {
  console.log(error);
}
}


  return (
    <>
    {showForm && (
<div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
    <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-[500px]">
        <h2 className="text-2xl font-bold mb-2 text-center">Dejanos tu consulta</h2>
        <form >
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Nombre completo</label>
                <input ref={inputNombre} onChange={captureNombre} type="text" className="w-full border border-gray-300 rounded px-3 py-2" required/>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                <input ref={inputCorreo} onChange={captureCorreo} type="email" className="w-full border border-gray-300 rounded px-3 py-2" required/>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea ref={inputMensaje} onChange={captureMensaje} className="w-full border border-gray-300 rounded px-3 py-2" required name="" id=""></textarea>
            </div>
            <div className="flex justify-between">
                <button onClick={enviar} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Enviar</button>
                <button type="button" onClick={() => setShowForm(false)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Cerrar</button>
            </div>
        </form>
    </div>
</div>
)}
      <Navbar />
      <Navbar2/>
      <div className="w-full absolute  h-screen z-10"></div>
      <div className=" z-50 bottom-6 right-5 fixed lg:flex hidden">
        <a href="" className="flex items-end gap-2 text-white ">
          <p className="font-semibold  bg-[#6a6a6ad8] px-[1rem] py-[0.3rem] rounded-[5px]  montserrat">Chateá con nosotros</p>
          <svg class="w-20 h-20 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>
            <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
          </svg>
</a>
      </div>
      {/* PARA PC */}
      <div className="w-full h-[90vh] lg:h-screen bg-cover bg-center bg-no-repeat pt-[5rem] relative flex justify-center items-center text-white" style={{ backgroundImage: `url(${background})` }}>
  <div className="lg:w-[50%]  w-full z-20 flex flex-col items-center lg:items-start gap-3 lg:gap-0 lg:px-[4rem] px-[1rem] text-center lg:text-left">
    <h1 className="text-[3rem] font-bold lg:text-left">Ventanas y mamparas a tu medida</h1>
    <p className="text-[1.2rem] mt-2 lg:flex hidden">Hacé realidad tus ideas. Cotizá sin compromiso.</p>
    <p className="text-[1rem] lg:text-[1.2rem] mt-2 flex lg:hidden">Hacé realidad tus ideas</p>
    <button onClick={() => setShowForm(true)} className="px-[1rem] py-[0.5rem] border-[2px] border-white border-solid text-[1.1rem] lg:hidden flex font-semibold montserrat bg-[black] rounded-[5px]">Cotizá sin cargo</button>
  </div>
  <div className="lg:w-[50%] lg:flex hidden w-full h-screen  justify-center items-center">
    <div className="bg-white rounded-[10px] px-[1.5rem] py-[1.5rem] w-[80%] lg:w-[50%]">

          <div className="flex flex-col w-full">
          <div class=" text-black montserrat font-semibold text-center text-[1.7rem]">
              <p>Cotizá sin cargo</p>
            </div>
            <div class="mb-1">
              <label for="exampleFormControlInput1" class="form-label">Nombre completo</label>
              <input ref={inputNombre} onChange={captureNombre} type="email" class="form-control" id="exampleFormControlInput1" placeholder="Escriba su nombre"/>
            </div>
            <div class="mb-1">
              <label for="exampleFormControlInput1" class="form-label">Correo electrónico</label>
              <input ref={inputCorreo} onChange={captureCorreo} type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Mensaje</label>
              <textarea ref={inputMensaje} onChange={captureMensaje} class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Escriba su consulta"></textarea>
            </div>
            <button onClick={enviar} className=" bg-[black] rounded-[5px] py-[0.5rem] font-semibold text-[white]">Enviar</button>
          </div>
          </div>
        </div>
      </div>
      {/* PARA CELU */}
      
      <Nosotros/>
      <Servicios/>
      <Reseñas/>
      <Contacto/>
      <Footer/>
    </>
  );
}