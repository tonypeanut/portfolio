import { Link } from "react-router-dom";
import Modal from "./Modal";
import useContexto from '../hook/useContexto';
import { useEffect } from "react";

import menuSVG from "../assets/icons/menu.svg";

const MenuDesplegable = () => {
  const { isOpen, openModal, menu } = useContexto();
  
  const mostrarMenu = menu.reduce((acc, valor) => {
     acc[valor] = valor;
     return acc
  }, {});

  useEffect(() => {
      const details = document.querySelector('details');
      const summary = document.querySelector('summary');
      document.addEventListener('click', e => {
        if (summary === e.target || e.target.classList.contains('menuSVG')){
            return;
        } else {
            details.removeAttribute('open');
        }
        
      })
  }, []);

  return (
    <>
        { isOpen && (<Modal/>)}
        <details className="dropdown h-full w-24">
            <summary className="w-full h-full flex justify-center"><img className="menuSVG" src={menuSVG} alt="Menú" width="40px" /></summary>
            <ul className="dropdown-content z-[1] bg-cyan-400 w-24">
                {mostrarMenu.inicio && <li><div className=" text-center p-1 w-full"><Link to="/">Inicio</Link></div></li>}
                {mostrarMenu.acerca && <li><div className=" text-center p-1 w-full"><a href="#acerca">Acerca</a></div></li>}
                {mostrarMenu.skills && <li><div className=" text-center p-1 w-full" ><a href="#skills">Skills</a></div></li>}
                {mostrarMenu.experiencia && <li><div className=" text-center p-1 w-full"><a href="#experiencia">Experiencia</a></div></li>}
                {mostrarMenu.proyectos && <li><div className=" text-center p-1 w-full"><a href="#proyectos">Proyectos</a></div></li>}
                {mostrarMenu.contacto && <li><div className=" text-center p-1 w-full"><button onClick={()=>openModal("formulario")}>Contacto</button></div></li>}
            </ul>
        </details>
    </>
  )
}

export default MenuDesplegable