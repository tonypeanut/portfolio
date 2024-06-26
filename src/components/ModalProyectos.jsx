import { useState, useEffect } from 'react';
import { getDatos } from '../data/datos.js';
import deploySVG from '../assets/icons/deploy.svg';
import githubSVG from '../assets/icons/github.svg';
import importarImagenes from "../helpers/importarImagenes";
import next from '../assets/icons/next.svg';
import previous from '../assets/icons/previous.svg'

import MostrarImagen from './MostrarImagen.jsx';

const ModalProyectos = ({id}) => {
  const datos = getDatos();
  const { datosProyectos } = datos;
  const { Nombre, Descripcion, Deployment, Github, Imagenes } = datosProyectos.find(elemento => elemento.Id === id);
  const [ imagenesImportadas, setImagenesImportadas ] = useState([]);
  const [ currentImageIndex, setCurrentImageIndex ] = useState(0);

  useEffect(() => {importarImagenes(Imagenes, setImagenesImportadas, "../assets/images/");}, []);

  const nextImage = () => { setCurrentImageIndex((currentImageIndex + 1) % imagenesImportadas.length);};
  const prevImage = () => { setCurrentImageIndex((currentImageIndex - 1 + imagenesImportadas.length) % imagenesImportadas.length);};

  return (
    <>
            <div className=" w-full relative">
                <MostrarImagen imagen={imagenesImportadas[currentImageIndex]} nombre={currentImageIndex} clases={"rounded-3xl shadow-2xl"}/>
                <div className={`absolute w-full flex justify-between h-full top-0 ${!imagenesImportadas[1] ? 'hidden' : 'block'}`}>
                    <button onClick={prevImage} className="hover:bg-cyan-300 hover:opacity-30 w-28">
                        <img src={previous} alt="<" className='w-10'/>
                    </button>

                    <button onClick={nextImage} className='hover:bg-cyan-300 hover:opacity-30 w-28'>
                        <img src={next} alt=">" className=" w-10 float-right" />
                    </button>
                </div>
                
            </div>

            <h2 className=" text-2xl font-bold mt-2">{Nombre}</h2>
            <p>{Descripcion}</p>
            <div>
                <div className="flex justify-center gap-3 mt-3">
                    <a href={Deployment} target="_blank"><img className="p-1 hover:shadow hover:shadow-cyan-400 hover:bg-cyan-400" src={deploySVG} alt="deploy" width="40px"/></a>
                    <a href={Github} target="_blank"><img className="p-1 hover:shadow hover:shadow-cyan-400 hover:bg-cyan-400" src={githubSVG} alt="github" width="40px"/></a>
                </div>
            </div>

    </>
  )
}

export default ModalProyectos