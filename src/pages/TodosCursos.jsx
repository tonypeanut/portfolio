import { useEffect, useState } from "react";
import Cursos from "../components/Cursos";

import useContexto from "../hook/useContexto";
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeProvider';

const Inicio = () => {
  const { setMenu } = useContexto();
  const { i18n } = useTranslation();
  const { theme } = useTheme(); 

  const [datos, setDatos] = useState({
    datosCursos: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {setMenu(["inicio", "contacto"])}, []);

  useEffect(() => {
    const loadTranslations = () => {
      const currentLanguage = i18n.language;
      const currentResources = i18n?.services?.resourceStore?.data?.[currentLanguage];

      if (currentResources) {
        const translation = currentResources.translation;
        const { datosCursos } = translation;

        setDatos({
          datosCursos: datosCursos || [],
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

  const { datosCursos } = datos;

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center md:mt-[60px] w-full">
        <Cursos datosCursos={ datosCursos }/>
      </div>
    </div>
  );
};

export default Inicio;