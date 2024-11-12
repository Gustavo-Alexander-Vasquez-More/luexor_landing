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
alert('Complete los campos para enviar su consulta.')
}else{
  const encodedMessage = encodeURIComponent(`${mensaje}\n\nDatos del cliente:\nNombre: ${nombre}\nCorreo electrónico: ${correo}`);
  
  const whatsappUrl = `https://api.whatsapp.com/send?phone=541124001758&text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
}
} catch (error) {
  console.log(error);
}
}
const navigateSobreNosotros=()=>{
closeMenu()
const scrollTop = window.innerHeight * 1.15; // 20% de la altura de la ventana
  window.scrollTo({
    top: scrollTop,
    behavior: 'smooth' 
  });
}
const navigateServicios=()=>{
  closeMenu()
  const scrollTop = window.innerHeight * 2.56; // 20% de la altura de la ventana
    window.scrollTo({
      top: scrollTop,
      behavior: 'smooth' 
    });
  }
  const navigateContacto=()=>{
    closeMenu()
    const scrollTop = window.innerHeight * 0.18; // 20% de la altura de la ventana
      window.scrollTo({
        top: scrollTop,
        behavior: 'smooth' 
      });
    }
  return (
    <>
      <Navbar/>
      <div className="w-full absolute  h-screen z-10"></div>
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
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Escriba su nombre"/>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Correo electrónico</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Mensaje</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Escriba su consulta"></textarea>
            </div>
            <button className=" bg-[black] rounded-[5px] py-[0.5rem] font-semibold text-[white]">Enviar</button>
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
