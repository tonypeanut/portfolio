import { useEffect, useState } from "react";
import Modal from "./Modal";
import useContexto from '../hook/useContexto';
import ProgressBar from "./ProgressBar";
import importarImagenes from "../helpers/importarImagenes";
import { useTranslation } from 'react-i18next';

const Skills = ({ datosSkills, datosSoftskills }) => {
  const [logosSkills, setLogosSkills] = useState([]);
  const [logosSoftskills, setLogosSoftskills] = useState([]);
  const { isOpen, openModal } = useContexto();
  const { t } = useTranslation();

  useEffect(() => {
    if (Array.isArray(datosSkills) && datosSkills.length > 0) {
      const arrayImagenesSkills = datosSkills.map((elemento) => elemento?.Logo || null).filter(Boolean);
      importarImagenes(arrayImagenesSkills, setLogosSkills, "../assets/icons/");
    }
  }, [datosSkills]);

  useEffect(() => {
    if (Array.isArray(datosSoftskills) && datosSoftskills.length > 0) {
      const arrayImagenesSoftskills = datosSoftskills.map((elemento) => elemento?.Logo || null).filter(Boolean);
      importarImagenes(arrayImagenesSoftskills, setLogosSoftskills, "../assets/icons/");
    }
  }, [datosSoftskills]);

  return (
    <>
      {isOpen && <Modal datosSkills={datosSkills} />}
      <h1 id="skills" className="text-2xl font-bold">{t('skills.title-1')}</h1>
      <div className="container bg-gray-200 tablet:w-3/5 w-full mb-5 border rounded p-5 flex flex-wrap gap-2">
        {(datosSkills || []).map((skill, i) => (
          <button
            key={i}
            className="flex flex-col bg-gray-100 ml5 border rounded-lg p-1 shadow-lg hover:bg-cyan-100"
            onClick={() => openModal("skill", i)}
          >
            <div className="flex">
              {logosSkills[i] && (
                <img
                  className="mr-1"
                  src={logosSkills[i]}
                  alt={skill?.Skill || 'Skill'}
                  width="20px"
                />
              )}
              {skill?.Skill || 'Skill'}
            </div>
            <ProgressBar dominio={skill?.Dominio || 0} />
          </button>
        ))}
      </div>

      <h1 className="text-2xl font-bold">{t('skills.title-2')}</h1>
      <div className="container bg-gray-200 tablet:w-3/5 w-full mb-5 border rounded p-5 flex flex-wrap gap-2">
        {(datosSoftskills || []).map((skill, i) => (
          <div
            key={i}
            className="flex bg-gray-100 ml5 border rounded-lg p-1 shadow-lg hover:bg-cyan-100"
          >
            {logosSoftskills[i] && (
              <img
                className="mr-1"
                src={logosSoftskills[i]}
                alt={skill?.Softskill || 'Softskill'}
                width="20px"
              />
            )}
            {skill?.Softskill || 'Softskill'}
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
