import { useEffect, useState } from "react";
import Proyectos from "../components/Sections/Proyectos";
import useContexto from "../hook/useContexto";
import { useTranslation } from "react-i18next";

const TodosProyectos = () => {
  const { setMenu } = useContexto();
  const { i18n } = useTranslation();

  const [datos, setDatos] = useState({
      datosProyectos: null,
    });

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {setMenu(["inicio", "cursos", "contacto"])}, []);

  useEffect(() => {
    const loadTranslations = () => {
      // Idioma actual
      const currentLanguage = i18n.language;
      const currentResources = i18n?.services?.resourceStore?.data?.[currentLanguage];

      if (currentResources) {
        const translation = currentResources.translation;
        const { datosProyectos } = translation;

        // Guardar los datos en el estado
        setDatos({
          datosProyectos: datosProyectos || [],
        });
        setIsLoading(false); 
      } else {
        console.warn("No se encontraron recursos para el idioma:", currentLanguage);
        setIsLoading(false); 
      }
    };

    loadTranslations();
  }, [i18n.language]);
  
  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Cargando...</div>;
  }

  const { datosProyectos } = datos;

  return (
    <>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center md:mt-[60px]">
            <Proyectos datosProyectos={datosProyectos} />
          </div>
        </div>
    </>
  )
}

export default TodosProyectos