import { useState } from "react";
 
const ProgressBar = ({dominio, alto, mostrarDominio}) => {
  const [ altura, setAltura ] = useState(alto || "h-1");
  let nivelDominio;

  switch (parseInt(dominio)){
    case 1: nivelDominio = "Principiante"; break;
    case 2: nivelDominio = "Básico"; break;
    case 3: nivelDominio = "Intermedio"; break;
    default: nivelDominio = "Avanzado"; break;
  }
  
  return (
    <>
      <div>
        {mostrarDominio && <p className=' font-bold'>Nivel de dominio: <span className=' font-normal'>{nivelDominio}</span></p>}
        <div className={`w-full ${altura} bg-gray-200 rounded-full flex overflow-hidden`}>
            { parseInt(dominio) >= 1 && <div className="h-full w-1/4 from-cyan-400 to-cyan-500 bg-gradient-to-r"></div> }
            { parseInt(dominio) >= 2 && <div className="h-full w-1/4 from-cyan-500 to-cyan-600 bg-gradient-to-r"></div> }
            { parseInt(dominio) >= 3 && <div className="h-full w-1/4 from-cyan-600 to-cyan-700 bg-gradient-to-r"></div> }
            { parseInt(dominio) >= 4 && <div className="h-full w-1/4 from-cyan-700 to-cyan-800 bg-gradient-to-r"></div> }
        </div>
      </div>
    </>
  )
}

export default ProgressBar