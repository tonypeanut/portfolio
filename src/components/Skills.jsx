import { useEffect, useState } from "react";
import Modal from "./Modal";
import useContexto from '../hook/useContexto';
import ProgressBar from "./ProgressBar";
import importarImagenes from "../helpers/importarImagenes";

const Skills = ({datosSkills, datosSoftskills}) => {

    const [logosSkills, setLogosSkills] = useState([]);
    const [logosSoftskills, setLogosSoftskills] = useState([]);
    const arrayImagenesSkills = datosSkills.map(elemento => elemento.Logo);
    const arrayImagenesSoftskills = datosSoftskills.map(elemento => elemento.Logo);

    // Se importan los logos de los Skills
    useEffect(() => {importarImagenes(arrayImagenesSkills, setLogosSkills, "../assets/icons/");}, [datosSkills]);
    useEffect(() => {importarImagenes(arrayImagenesSoftskills, setLogosSoftskills, "../assets/icons/");}, [datosSoftskills])

    const { isOpen, openModal } = useContexto();

  return (
    <>
     { isOpen && (<Modal/>)}
     
        
        <h1 className=" text-2xl font-bold">Hardskills</h1>
        <div className="container bg-gray-200 w-3/4 mb-5 border rounded p-5 flex flex-wrap gap-2">
            {datosSkills.map((skill, i) => (
                <button key={i} className="flex flex-col bg-gray-100  ml5 border rounded-lg p-1 shadow-lg hover:bg-cyan-100" onClick={()=>openModal("skill",i)}>
                    <div className="flex">
                        <img className=" mr-1" src={logosSkills[i]} alt="" width="20px" />
                        {skill.Skill}
                    </div>
                    <ProgressBar dominio={skill.Dominio}/>
                </button>  
            ))}
        </div>
              

        <h1 className=" text-2xl font-bold">Softskills</h1>
        <div className="container bg-gray-200 w-3/4 mb-5 border rounded p-5 flex flex-wrap gap-2">
                {datosSoftskills.map((skill, i) => (
                    <div key={i} className="flex bg-gray-100  ml5 border rounded-lg p-1 shadow-lg hover:bg-cyan-100">
                        <img className=" mr-1" src={logosSoftskills[i]} alt="" width="20px" />
                        {skill.Softskill}
                    </div>
                ))}
        </div>

        
        
      
    </>
  )
}

export default Skills