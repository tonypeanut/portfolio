import { useEffect, useState } from "react";
import Modal from "./Modal";
import useContexto from '../hook/useContexto';
import ProgressBar from "./ProgressBar";
import importarImagenes from "../helpers/importarImagenes";
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeProvider';

const Skills = ({ datosSkills, datosSoftskills }) => {
  const [logosSkills, setLogosSkills] = useState([]);
  const [logosSoftskills, setLogosSoftskills] = useState([]);
  const { isOpen, openModal } = useContexto();
  const { t } = useTranslation();
  const { theme } = useTheme(); 

  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const arrayImagenesSkills = datosSkills.map(elemento => elemento.Logo)
      importarImagenes(arrayImagenesSkills, setLogosSkills, "../assets/icons/");
    }, 100);
    return () => clearTimeout(timeout);
  }, [datosSkills]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const arrayImagenesSoftskills = datosSoftskills.map(elemento => elemento.Logo)
      importarImagenes(arrayImagenesSoftskills, setLogosSoftskills, "../assets/icons/")
    }, 100);
    return () => clearTimeout(timeout);
  }, [datosSoftskills]);

  return (
    <>
      {isOpen && <Modal datosSkills={datosSkills} />}

      <h1 id="skills" className={`text-2xl font-bold theme-${theme}:text-${theme}-text-1`}>{t('skills.title-1')}</h1>
      <div className={`container tablet:w-3/5 w-full mb-5 rounded p-5 flex flex-wrap gap-2 theme-${theme}:bg-${theme}-color-2 theme-${theme}:text-${theme}-text-1`}>

        {(datosSkills).map((skill, i) => (
          <button
            key={i}
            className={`flex flex-col ml5 rounded-lg p-1 shadow-lg 
                        theme-${theme}:bg-${theme}-neutral hover:theme-${theme}:bg-${theme}-color-4`}
            onClick={() => openModal("skill", i)}
          >
            <div className="flex">
              {logosSkills[i] ? (
                <img
                  className="mr-1"
                  src={`${logosSkills[i]}`}
                  alt={skill?.Skill || 'Skill'}
                  width="20px"
                />
              ) : (
                <div className="mr-1 w-5 h-5 bg-gray-300" /> // Placeholder mientras la imagen no esté cargada
              )}
              {skill?.Skill || 'Skill'}
            </div>
            <ProgressBar dominio={skill?.Dominio || 0} />
          </button>
        ))}
      </div>

      <h1 className={`text-2xl font-bold theme-${theme}:text-${theme}-text-1`}>{t('skills.title-2')}</h1>
      <div className= {`container tablet:w-3/5 w-full mb-5 rounded p-5 flex flex-wrap gap-2 theme-${theme}:bg-${theme}-color-2 theme-${theme}:text-${theme}-text-1`}>
        {(datosSoftskills).map((skill, i) => (
          <div
            key={i}
            className={`flex ml5 rounded-lg p-1 shadow-lg
                        theme-${theme}:bg-${theme}-neutral hover:theme-${theme}:bg-${theme}-color-4`}
          >
            {logosSoftskills[i] ? (
              <img
                className="mr-1"
                src={`${logosSoftskills[i]}`}
                alt={skill?.Softskill || 'Softskill'}
                width="20px"
              />
            ) : (
              <div className="mr-1 w-5 h-5 bg-gray-300" /> // Placeholder mientras la imagen no esté cargada
            )}
            {skill?.Softskill || 'Softskill'}
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;

