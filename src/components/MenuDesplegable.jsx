import { Link, useFetcher } from "react-router-dom";
import Modal from "./Modal";
import useContexto from '../hook/useContexto';
import { useState, useEffect } from "react";

const MenuDesplegable = () => {
  const { isOpen, openModal } = useContexto();

  useEffect(() => {
      document.addEventListener('click', e => {
        console.log(e.target)
      })
  }, []);

  return (
    <>
        { isOpen && (<Modal/>)}
        <details className="dropdown w-full">
            <summary className=" mr-8 w-full text-center">Menú</summary>
            <ul className="dropdown-content z-[1] bg-cyan-400">
                <li><div className=" text-center p-1"><Link to="/">Inicio</Link></div></li>
                <li><div className=" text-center p-1"><a href="#acerca">Acerca</a></div></li>
                <li><div className=" text-center p-1"><a href="#experiencia">Experiencia</a></div></li>
                <li><div className=" text-center p-1"><a href="#proyectos">Proyectos</a></div></li>
                <li><div className=" text-center p-1"><button onClick={()=>openModal("formulario")}>Contacto</button></div></li>
            </ul>
        </details>
    </>
  )
}

export default MenuDesplegable