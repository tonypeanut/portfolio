import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="font-semibold flex">
        <Link to="/" className=" p-4 hover:bg-slate-600">Inicio</Link>
        <Link to="/acerca" className=" p-4 hover:bg-slate-600">Acerca</Link>
        <Link to="/experiencia" className=" p-4 hover:bg-slate-600">Experiencia</Link>
        <Link to="/proyectos" className=" p-4 hover:bg-slate-600">Proyectos</Link>
        <Link to="/contacto" className=" p-4 hover:bg-slate-600">Contacto</Link>
    </nav>
  )
}

export default Navigation