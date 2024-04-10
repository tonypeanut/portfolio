import { useEffect, useState } from 'react';
import datos from '../data/datos.json'
import ProgressBar from "./ProgressBar";

const ModalSkills = ({id}) => {
  const { datosSkills } = datos;
  const { Skill, Logo, Dominio, Descripcion } = datosSkills[id];
  const [ logoSkill, setLogoSkill ] = useState(null);

  const importLogo = async (logo) => {
    const url = `../assets/icons/${logo}`;
    const importedLogo = await import(url /* @vite-ignore */);
    setLogoSkill(importedLogo.default)
  };

  useEffect(() => {importLogo(Logo);}, [Logo]);

  


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