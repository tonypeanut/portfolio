import { Link } from "react-router-dom";

const MenuDesplegable = () => {
  return (
    <>
        <details className="dropdown w-full">
            <summary className="m-1 btn text-center">Menú</summary>
            <ul className="dropdown-content z-[1]">
                <li><div className=" text-center p-1"><Link to="/">Inicio</Link></div></li>
                <li><div className=" text-center p-1"><Link to="/acerca">Acerca</Link></div></li>
                <li><div className=" text-center p-1"><Link to="/experiencia">Experiencia</Link></div></li>
                <li><div className=" text-center p-1"><Link to="/proyectos">Proyectos</Link></div></li>
                <li><div className=" text-center p-1"><Link to="/contacto">Contacto</Link></div></li>
            </ul>
        </details>
    </>
  )
}

export default MenuDesplegable