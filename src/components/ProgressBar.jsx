import { useState } from "react";
import { useTranslation } from 'react-i18next';
 
const ProgressBar = ({dominio, alto, mostrarDominio}) => {
  const [ altura, setAltura ] = useState(alto || "h-1");
  const { t } = useTranslation(); 
  let nivelDominio;

  switch (parseInt(dominio)){
    case 1: nivelDominio = t('progress-bar.level-1'); break;
    case 2: nivelDominio = t('progress-bar.level-2'); break;
    case 3: nivelDominio = t('progress-bar.level-3'); break;
    default: nivelDominio = t('progress-bar.level-4'); break;
  }
  
  return (
    <>
      <div>
        {mostrarDominio && <p className=' font-bold'>{t('progress-bar.title')} <span className=' font-normal'>{nivelDominio}</span></p>}
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