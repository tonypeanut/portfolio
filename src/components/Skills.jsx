import { useEffect, useState } from "react";
import Modal from "./Modal";
import useContexto from '../hook/useContexto';

const Skills = ({datosSkills, datosSoftskills}) => {

    const [logosSkills, setLogosSkills] = useState([]);
    const [logosSoftskills, setLogosSoftskills] = useState([]);

    const importLogosSkills = async (array, i) => {
        const logoImports = await Promise.all(
            array.map(async (item) => {
            const url = `../assets/icons/${item[1]}`
            const importedLogo = await import(url /* @vite-ignore */);
            return importedLogo.default;
          })
        );
        if (i===1){setLogosSkills(logoImports);}
        else if (i===2){setLogosSoftskills(logoImports);}
    };
    // Se importan los logos de los Skills
    useEffect(() => {importLogosSkills(datosSkills, 1);}, [datosSkills]);
    useEffect(() => {importLogosSkills(datosSoftskills, 2);}, [datosSoftskills]);

    const { isOpen, openModal } = useContexto();

  return (
    <>
     { isOpen && (<Modal/>)}
        
      <div className="container bg-gray-200 w-3/4 ml5 mt-5 mb-5 border rounded">
          <div className=" m-5">
              <h1>Skills</h1>
              <div className="flex flex-wrap gap-2">
                  {datosSkills.map((skill, i) => (
                      <button key={i} className="flex bg-gray-100  ml5 border rounded-lg p-1 shadow-lg hover:bg-cyan-100" onClick={()=>openModal("skill",i)}>
                          <img className=" mr-1" src={logosSkills[i]} alt="" width="20px" />
                          {skill[0]}
                      </button>  
                  ))}
              </div>
              

              <h1>Softskills</h1>
              <div className="flex flex-wrap gap-2">
                  {datosSoftskills.map((skill, i) => (
                      <button key={i} className="flex bg-gray-100  ml5 border rounded-lg p-1 shadow-lg hover:bg-cyan-100" onClick={()=>openModal("softskill",i)}>
                          <img className=" mr-1" src={logosSoftskills[i]} alt="" width="20px" />
                          {skill[0]}
                      </button>
                  ))}
              </div>
          </div>
      </div>
    </>
  )
}

export default Skills