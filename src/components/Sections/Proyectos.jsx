import { useState, useEffect } from "react";
import Modal from "../Modal.jsx";
import useContexto from "../../hook/useContexto.jsx";
import deploySVG from "../../assets/icons/deploy.svg";
import githubSVG from "../../assets/icons/github.svg";
import importarImagenes from "../../helpers/importarImagenes.js";
import { Link } from "react-router-dom";
import MostrarImagen from "../MostrarImagen.jsx";
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeProvider.jsx';

const Proyectos = ({ limit, datosProyectos }) => {
  const { isOpen, openModal } = useContexto();
  const [imagenes, setImagenes] = useState([]);
  const { t } = useTranslation(); 
  const { theme } = useTheme(); 
  

  let proyectos;

  const proyectosVisibles = datosProyectos.filter(
    (elemento) => elemento.visible === "true"
  );

  if (limit) {
    proyectos = proyectosVisibles.slice(0, parseInt(limit));
  } else {
    proyectos = [...proyectosVisibles];
  }

  const arrayImagenes = proyectos.map((elemento) => elemento.Imagenes[0]);

  useEffect(() => {
    importarImagenes(arrayImagenes, setImagenes, "../assets/images/");
  }, []);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {isOpen && <Modal datosProyectos={datosProyectos} />}
      
      <section id="experiencia" className='w-full py-2 px-5 md:px-40 lg:px-60'>

        <h1 id="proyectos" className={`text-2xl font-bold text-center theme-${theme}:text-${theme}-text-1`}>
          {t('projects.title')}
        </h1>
        <div className={`border rounded p-5 text-left theme-${theme}:bg-${theme}-color-2`}>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 theme-${theme}:text-${theme}-text-1`}>
            {proyectos.map((proyecto, i) => (
              <div key={i} className={`border rounded-lg p-5 shadow-lg flex flex-col justify-between h-full theme-${theme}:bg-${theme}-color-1`}>
                <div className="flex justify-center"> 
                  <MostrarImagen imagen={imagenes[i]} nombre={`imagen${i}`} clases="w-full h-32 object-cover rounded"/>
                </div>

                <div className="flex flex-wrap gap-1 p-4">
                  {
                    proyecto.Etiquetas.map((etiqueta) => (
                      <p className={` text-xs px-2 py-1 rounded-xl theme-${theme}:bg-${theme}-color-5 hover:theme-${theme}:bg-${theme}-color-6 theme-${theme}:text-${theme}-text-2`}>{etiqueta}</p>
                    ))
                  }
                </div>

                <h2 className="text-xl font-bold mb-2 text-center">
                  {proyecto.Nombre}
                </h2>

                <p className="text-sm mb-4">{proyecto.Descripcion}</p>
                <div className="mt-auto">
                  <div className="flex justify-center gap-3 mb-3">
                    {proyecto.Deployment && (
                      <a href={proyecto.Deployment} target="_blank" rel="noreferrer">
                        <img className={`p-1 hover:theme-${theme}:bg-${theme}-color-4`} src={deploySVG} alt="deploy" width="40px"/>
                      </a>
                    )}
                    
                    {proyecto.Github && (
                      <a href={proyecto.Github} target="_blank" rel="noreferrer">
                        <img className={`p-1 hover:theme-${theme}:bg-${theme}-color-4`} src={githubSVG} alt="github" width="40px"/>
                      </a>
                    )}
                  </div>
                  <div className="flex justify-center">
                    <button className={`font-bold p-2 rounded-xl theme-${theme}:bg-${theme}-color-5 hover:theme-${theme}:bg-${theme}-color-6 theme-${theme}:text-${theme}-text-2`} onClick={() => openModal("proyectos", proyecto.Id)}>
                      {t('projects.button-1')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {limit && (
            <div className="flex justify-center mt-3">
              <Link to="/proyectos" className={`font-bold p-4 rounded-xl theme-${theme}:bg-${theme}-color-5 hover:theme-${theme}:bg-${theme}-color-6 theme-${theme}:text-${theme}-text-2`} onClick={handleLinkClick}>
                {t('projects.button-2')}
              </Link>
            </div>
          )}
        </div>

      </section>
    </>
  );
};

export default Proyectos;
