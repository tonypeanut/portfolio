import { useEffect, useState } from "react";

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



  return (
    <>
      <div className="container bg-gray-200 w-3/4 ml5 mt-5 mb-5 border rounded">
          <div className=" m-5">
              <h1>Skills</h1>
              <div className="flex flex-wrap mb-2">
                  {datosSkills.map((skill, i) => (
                      <div key={i} className="flex border border-gray-600 py-1 px-2 mt-2 mr-2 bg-gradient-to-r from-gray-300 to-gray-500 rounded font-bold hover:from-slate-400 hover:to-gray-600">
                          <img className=" mr-1" src={logosSkills[i]} alt="" width="20px" />
                          {skill[0]}
                      </div>  
                  ))}
              </div>
              

              <h1>Softskills</h1>
              <div className="flex flex-wrap mb-2">
                  {datosSoftskills.map((skill, i) => (
                      <div key={i} className="flex border border-gray-600 py-1 px-2 mt-2 mr-2 bg-gradient-to-r from-gray-300 to-gray-500 rounded font-bold hover:from-slate-400 hover:to-gray-600">
                          <img className=" mr-1" src={logosSoftskills[i]} alt="" width="20px" />
                          {skill[0]}
                      </div>
                  ))}
              </div>
          </div>
      </div>
    </>
  )
}

export default Skills