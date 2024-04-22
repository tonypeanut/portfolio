import { useEffect, useState } from 'react';
import { getDatos } from '../data/datos.js'
import ProgressBar from "./ProgressBar";
import importarImagenes from "../helpers/importarImagenes";
import MostrarImagen from './MostrarImagen.jsx';

const ModalSkills = ({id}) => {
  const datos = getDatos();
  const { datosSkills } = datos;
  const { Skill, Logo, Dominio, Descripcion } = datosSkills[id];
  const [ logoSkill, setLogoSkill ] = useState([]);

  useEffect(() => {importarImagenes([Logo], setLogoSkill, "../assets/icons/");}, []);

  return (
    <>
          <div className="flex">
                  {logoSkill[0] && <MostrarImagen imagen={logoSkill[0]} nombre={Skill} clases="w-1/3"/>}
                  <div className="card-body">
                        <h2 className="card-title">{Skill}</h2>
                        <p>{Descripcion}</p>
                        
                        <ProgressBar dominio={Dominio} alto="h-5" mostrarDominio={true}/>
                  </div>
                
          </div>
    </>
  )
}

export default ModalSkills