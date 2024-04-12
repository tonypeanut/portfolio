import { Link } from 'react-router-dom';
import Modal from "./Modal";
import useContexto from '../hook/useContexto';

const Navigation = () => {
  const { isOpen, openModal, menu } = useContexto();
  
  const mostrarMenu = menu.reduce((acc, valor) => {
     acc[valor] = valor;
     return acc
  }, {});
  
  return (
    <>
        { isOpen && (<Modal/>)}
        <nav className="font-semibold flex">
            {mostrarMenu.inicio && <Link to="/" className=" p-4 hover:bg-slate-600">Inicio</Link>}
            {mostrarMenu.acerca && <a href="#acerca" className=" p-4 hover:bg-slate-600">Acerca</a>}
            {mostrarMenu.skills && <a href="#skills" className=" p-4 hover:bg-slate-600">Skills</a>}
            {mostrarMenu.experiencia && <a href="#experiencia" className=" p-4 hover:bg-slate-600">Experiencia</a>}
            {mostrarMenu.proyectos && <a href="#proyectos" className=" p-4 hover:bg-slate-600">Proyectos</a>}
            {mostrarMenu.contacto && <button className=" p-4 hover:bg-slate-600" onClick={()=>openModal("formulario")}>Contacto</button>}
        </nav>
    </>
    
  )
}

export default Navigation