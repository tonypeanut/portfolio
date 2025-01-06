import ProgressBar from "./ProgressBar";
import importarImagenes from "../helpers/importarImagenes";
import MostrarImagen from './MostrarImagen.jsx';
import { useEffect, useState } from "react";

const ModalSkills = ({ id, datosSkills }) => {
  const [logoSkill, setLogoSkill] = useState([]);
  const [skillData, setSkillData] = useState(null);

  // Actualiza `skillData` cuando cambian `id` o `datosSkills`
  useEffect(() => {
    if (datosSkills?.[id] && datosSkills[id] !== skillData) {
      setSkillData(datosSkills[id]);
    }
  }, [id, datosSkills, skillData]);

  // Solo importa la imagen si no se ha cargado previamente
  useEffect(() => {
    if (skillData?.Logo && logoSkill.length === 0) {  // Evita volver a cargar la imagen si ya se cargó
      importarImagenes([skillData.Logo], setLogoSkill, "../assets/icons/");
    }
  }, [skillData, logoSkill]);  // Dependemos de `skillData` y `logoSkill` para no volver a cargar imágenes innecesariamente

  // Muestra un estado de carga si `skillData` aún no está disponible
  if (!skillData) {
    return <div>Cargando...</div>;
  }

  const { Skill, Dominio, Descripcion } = skillData;

  return (
    <div className="flex">
      {logoSkill[0] && (
        <MostrarImagen imagen={logoSkill[0]} nombre={Skill} clases="w-1/3" />
      )}
      <div className="card-body">
        <h2 className="card-title">{Skill}</h2>
        <p>{Descripcion}</p>
        <ProgressBar dominio={Dominio} alto="h-5" mostrarDominio={true} />
      </div>
    </div>
  );
};

export default ModalSkills;
