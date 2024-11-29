import React, { useRef, useState } from "react";
import catalogo from '../catalogo.js';
const Lightbox = ({ id, closeModal }) => {
const [showForm, setShowForm] = useState(false);
const [nombre, setNombre]=useState()
const [correo, setCorreo]=useState()
const [mensaje, setMensaje]=useState()
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

const catalogoo = catalogo?.map(dat => dat);
const catalogo_filter=catalogoo.find(dat=>dat.id === id)
console.log(catalogo_filter);
const url_image=catalogo_filter.image
async function enviar(){
event.preventDefault()
try {
    if(!nombre || !correo || !mensaje){
    alert('Complete los campos para enviar su consulta.')
}else{
    const encodedMessage = encodeURIComponent(`${mensaje}\n\nModelo a cotizar: ${url_image}\nDatos del cliente:\nNombre: ${nombre}\nCorreo electrónico: ${correo}`);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=541124001758&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
}
} catch (error) {
    console.log(error);
}
}
return (
<>
<div className="fixed inset-0 bg-[#000000e5] flex flex-col justify-center items-center z-50" style={{ height: '100vh', overflow: 'hidden' }}>
    <div className="w-full bg-[black] h-[7vh] flex items-center justify-between text-white px-[2rem]">
        <p>Preview-Fullscreen</p>
        <button className=" text-white text-[2rem] " onClick={closeModal}>×</button>
    </div>
    <div className="relative w-full px-[1rem] lg:px-0 flex-grow py-[3rem] gap-4 flex flex-col justify-center items-center overflow-hidden">
        <img className="object-contain max-h-full max-w-full" src={url_image} alt="Imagen en detalle"/>
        <button onClick={() => setShowForm(true)} className=" bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Cotizá este modelo sin cargo</button>
    </div>
</div>
{showForm && (
<div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
    <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-[500px]">
        <h2 className="text-2xl font-bold mb-2 text-center">Cotizá sin cargo</h2>
        <p className="text-[0.7rem] mb-4 text-center">Envianos tu consulta por este modelo</p>
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
</>
);};

export default Lightbox;