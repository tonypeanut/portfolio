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
    const arrayImagenesSkills = datosSkills.map(elemento => elemento.Logo);
    importarImagenes(arrayImagenesSkills, setLogosSkills, "../assets/icons/");
  }, [datosSkills]);

  useEffect(() => {
    const arrayImagenesSoftskills = datosSoftskills.map(elemento => elemento.Logo);
    importarImagenes(arrayImagenesSoftskills, setLogosSoftskills, "../assets/icons/")
  }, [datosSoftskills]);


  return (
    <>
      DEPURANDO EN PRODUCCIÓN
    </>
  );
};

export default Skills;

