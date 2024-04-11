import { Link } from 'react-router-dom';
import Modal from "./Modal";
import useContexto from '../hook/useContexto';


const Navigation = () => {
  const { isOpen, openModal } = useContexto();

  return (
    <>
        { isOpen && (<Modal/>)}
        <nav className="font-semibold flex">
            <Link to="/" className=" p-4 hover:bg-slate-600">Inicio</Link>
            <a href="#acerca" className=" p-4 hover:bg-slate-600">Acerca</a>
            <a href="#skills" className=" p-4 hover:bg-slate-600">Skills</a>
            <a href="#experiencia" className=" p-4 hover:bg-slate-600">Experiencia</a>
            <a href="#proyectos" className=" p-4 hover:bg-slate-600">Proyectos</a>
            <button className=" p-4 hover:bg-slate-600" onClick={()=>openModal("formulario")}>Contacto</button>
        </nav>
    </>
    
  )
}

export default Navigation