import { useState } from 'react';

import useContexto from '../hook/useContexto';
import RedesSociales from './RedesSociales';
import Alerta from './Alerta';

const ModalFormulario = () => {

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [alerta, setAlerta] = useState({});

  const { closeModal} = useContexto();

  const handleSubmit = e =>{
    e.preventDefault();
    if([nombre, email, mensaje].includes('')){
      setAlerta({msg: "No puede haber campos vacíos.", error:true })
      return
    }

    setAlerta({msg: "Mensaje enviado correctamente."});

    setTimeout(() => closeModal(), 1000);
    
  }

  const { msg } = alerta;

  return (
    <>
      <RedesSociales/>
      <h1 className=" text-3xl font-bold">Contactame!</h1>

      <form onSubmit={handleSubmit}>
          <div className=" mt-3">
              <input type="text" id="nombre" placeholder="Nombre" className=" border rounded p-1 w-full" value={nombre} onChange={e=>setNombre(e.target.value)}/>
          </div>

          <div className=" mt-3">
              <input type="email" id="correo" placeholder="Correo" className=" border rounded p-1 w-full" value={email} onChange={e=>setEmail(e.target.value)}/>
          </div>

          <div className=" mt-3">
              <input type="text" id="asunto" placeholder="Asunto" className=" border rounded p-1 w-full" value={asunto} onChange={e=>setAsunto(e.target.value)}/>
          </div>

          <div className=" mt-3 flex flex-col">
              <textarea id="mensaje" placeholder="Mensaje" className=" border rounded p-1" value={mensaje} onChange={e=>setMensaje(e.target.value)}/>
          </div>

          <button className=" bg-gray-400 p-2 rounded-xl hover:bg-gray-500 w-full mt-3">Enviar</button>

      </form>

      {msg && <Alerta alerta={alerta}/>}
    </>
  )
}

export default ModalFormulario