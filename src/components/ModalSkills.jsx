import { useEffect, useState } from 'react';
import { getDatos } from '../data/datos.js'
import ProgressBar from "./ProgressBar";
import importarImagenes from "../helpers/importarImagenes";

const ModalSkills = ({id}) => {
  const datos = getDatos();
  const { datosSkills } = datos;
  const { Skill, Logo, Dominio, Descripcion } = datosSkills[id];
  const [ logoSkill, setLogoSkill ] = useState(null);

  useEffect(() => {importarImagenes([Logo], setLogoSkill, "../assets/icons/");}, []);


  return (
    <>
          <div className="flex">
                <img src={logoSkill} className=' w-1/3' alt="Logo"/>
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