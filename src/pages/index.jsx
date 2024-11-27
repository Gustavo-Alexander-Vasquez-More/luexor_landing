import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link as Anchor } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Navbar from "../components/navbar";
import Nosotros from "./nosotros";
import Servicios from "./servicios";
import Footer from "../components/footer";
import Reseñas from "./reseñas";
import Contacto from "./contacto";
import '../fonts/fonts.css'
import background from '../images/bakground.png'
export default function Index() {
const navigate=useNavigate()
const [nombre, setNombre]=useState()
const [correo, setCorreo]=useState()
const [mensaje, setMensaje]=useState()
const [menu, setMenu]=useState(false)
const [showNavbar, setShowNavbar] = useState(true); 
console.log(showNavbar);
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
const openMenu=()=>{
setMenu(true)
document.body.style.overflow = 'hidden'; 
}
const closeMenu=()=>{
setMenu(false)
document.body.style.overflow = 'auto'
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
      <Navbar />
      <div className="w-full absolute  h-screen z-10"></div>
      <div className=" z-50 bottom-6 right-5 fixed">
        <a href="" className="flex items-end gap-2 text-white ">
          <p className="font-semibold bg-[#6a6a6ad8] px-[1rem] py-[0.3rem] rounded-[5px]">Chateá con nosotros</p>
          <svg class="w-20 h-20 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>
            <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
          </svg>
</a>
      </div>
      <div className="w-full h-screen bg-cover bg-center bg-no-repeat pt-[5rem] relative flex" style={{ backgroundImage: `url(${background})` }}>
        <div className="w-[50%] h-screen z-20 flex relative text-white px-[4rem]">
          <div className="flex flex-col gap-2 top-[25%] absolute">
          <h1 className="text-[3rem] font-bold font-serif">Ventanas y mamparas a tu medida</h1>
          <p className="text-[1.2rem] font-semibold">Hacé realidad tus ideas. Cotizá sin compromiso.</p>
          </div>
        </div>
        <div className="w-[50%] h-screen z-20 flex   relative justify-center">
          <div className="bg-[white] rounded-[10px] px-[1.5rem] w-[50%] absolute top-[15%] py-[1.5rem] flex items-center">
          <div className="flex flex-col w-full">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Nombre completo</label>
              <input ref={inputNombre} onChange={captureNombre} type="email" class="form-control" id="exampleFormControlInput1" placeholder="Escriba su nombre"/>
            </div>
            <div class="mb-3">
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
      <Nosotros/>
      <Servicios/>
      <Reseñas/>
      <Contacto/>
      <Footer/>
    </>
  );
}