import { useState, useEffect } from "react"; 
import Modal from "./Modal";
import useContexto from '../hook/useContexto';
import deploySVG from '../assets/icons/deploy.svg';
import githubSVG from '../assets/icons/github.svg';
import importarImagenes from "../helpers/importarImagenes";
import { Link } from "react-router-dom";
import { getDatos } from '../data/datos.js';
import MostrarImagen from './MostrarImagen.jsx';

const Proyectos = ({limit}) => {
  const datos = getDatos();
  const { isOpen, openModal } = useContexto();
  const [ imagenes, setImagenes ] = useState([]);
  const { datosProyectos} = datos
  
  let proyectos;

  if (limit) { proyectos = datosProyectos.slice(0,parseInt(limit)) }
  else { proyectos = [...datosProyectos]}

  const arrayImagenes = proyectos.map(elemento => elemento.Imagenes[0]);
  
  useEffect(() => {importarImagenes(arrayImagenes, setImagenes, "../assets/images/");}, []);

  const handleLinkClick = () => {
    window.scrollTo(0,0);
  }

  return (
    <>
      { isOpen && (<Modal/>)}
      <h1 id="proyectos" className="text-2xl font-bold">Proyectos</h1>
      <div className="container bg-gray-200 tablet:w-3/5 w-full mb-5 border rounded  p-5  text-left">
            <div className="flex flex-col md:flex-row gap-10 flex-wrap justify-center">
                {proyectos.map((proyecto, i) => (
                  <div key={i} className="bg-gray-100 border rounded-lg p-5 shadow-lg hover:bg-cyan-100 w-full flex flex-col justify-between laptop:w-52">
                      <MostrarImagen imagen={imagenes[i]} nombre={`imagen${i}`} clases="cursor-pointer hover:brightness-105" onClick={()=>openModal("proyectos",i)}/>
                      <h2 className=" text-2xl font-bold mt-2">{proyecto.Nombre}</h2>
                      <p>{proyecto.Descripcion}</p>
                      <div>
                          <div className="flex justify-center gap-3 mt-3">
                              <a href={proyecto.Deployment} target="_blank"><img className="p-1 hover:shadow hover:shadow-cyan-400 hover:bg-cyan-400" src={deploySVG} alt="deploy" width="40px"/></a>
                              <a href={proyecto.Github} target="_blank"><img className="p-1 hover:shadow hover:shadow-cyan-400 hover:bg-cyan-400" src={githubSVG} alt="github" width="40px"/></a>
                          </div>
                          <div className=" flex justify-center mt-2">
                              <button className="p-2 rounded-xl from-gray-200 to-gray-400 hover:from-gray-300 hover:to-gray-500 bg-gradient-to-br" onClick={()=>openModal("proyectos",i)}>Más información..</button>
                          </div>
                      </div>
                  </div>
                ))}
            </div>
            { limit && <div className="flex justify-center mt-3"><Link to="/proyectos" className="p-2 rounded-xl from-cyan-300 to-cyan-500 hover:from-cyan-400 hover:to-cyan-600 bg-gradient-to-br font-bold" onClick={handleLinkClick}>Más proyectos</Link></div>}
      </div>
  </>
  )
}

export default Proyectos