import { useEffect, useState } from "react";
import Presentacion from "../components/Presentacion";
import Acerca from "../components/Acerca";
import Skills from "../components/Skills";
import Experiencia from "../components/Experiencia";
import Proyectos from "../components/Proyectos";
import Contacto from "../components/Contacto"

import { useTranslation } from "react-i18next";
import useContexto from "../hook/useContexto";

const Inicio = () => {
  const { setMenu } = useContexto();
  const { i18n } = useTranslation();

  // Estado único para almacenar todos los datos
  const [datos, setDatos] = useState({
    datosSkills: null,
    datosSoftskills: null,
    datosExperiencia: null,
    datosProyectos: null,
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {setMenu(["presentacion", "acerca", "skills", "experiencia", "proyectos", "cursos", "contacto"])}, []);

  useEffect(() => {
    const loadTranslations = () => {
      // Idioma actual
      const currentLanguage = i18n.language;
      const currentResources = i18n?.services?.resourceStore?.data?.[currentLanguage];

      if (currentResources) {
        const translation = currentResources.translation;
        const { datosSkills, datosSoftskills, datosExperiencia, datosProyectos } = translation;

        // Guardar los datos en el estado
        setDatos({
          datosSkills: datosSkills || [],
          datosSoftskills: datosSoftskills || [],
          datosExperiencia: datosExperiencia || [],
          datosProyectos: datosProyectos || [],
        });
        setIsLoading(false); // Los datos se cargaron con éxito
      } else {
        console.warn("No se encontraron recursos para el idioma:", currentLanguage);
        setIsLoading(false); // Evitar bloqueo por falta de recursos
      }
    };

    loadTranslations();
  }, [i18n.language]);

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Cargando...</div>;
  }

  // Desestructuración de los datos
  const { datosSkills, datosSoftskills, datosExperiencia, datosProyectos } = datos;

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center md:mt-[60px]">
        <Presentacion />
        <Acerca />
        <Skills datosSkills={datosSkills} datosSoftskills={datosSoftskills} />
        <Experiencia datosExperiencia={datosExperiencia} />
        <Proyectos limit={6} datosProyectos={datosProyectos} />
        <Contacto />
      </div>
    </div>
  );
};

export default Inicio;
