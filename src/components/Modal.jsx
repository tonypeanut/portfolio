import { useEffect, useCallback } from "react";
import useContexto from "../hook/useContexto";
import ModalExperiencia from "./ModalExperiencia";
import ModalFormulario from "./ModalFormulario";
import ModalProyectos from "./ModalProyectos";
import ModalSkills from "./ModalSkills";
import ModalCursos from "./ModalCursos"

import closeIcon from "../assets/icons/close.svg";
import { useTheme } from '../context/ThemeProvider';

const Modal = ({ datosSkills, datosExperiencia, datosProyectos, datosCursos }) => {
  const { closeModal, tipo, id } = useContexto();
  const { theme } = useTheme(); 

  // Usar useCallback para evitar que la función cambie innecesariamente.
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    // Limpiar el listener al desmontar
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleCloseClick = (e) => {
    if (e.target.id === "modal-background") {
      closeModal();
    }
  };

  // Condiciones para renderizar el contenido
  const shouldRenderContent = () => {
    switch (tipo) {
      case "experiencia":
        return datosExperiencia?.[id] !== undefined;
      case "formulario":
        // Puede agregar condiciones aquí si es necesario
        return true;
      case "proyectos":
        // Solo renderizar si 'id' es válido (ejemplo de validación)
        return datosProyectos?.[id-1] !== undefined;
      case "skill":
        // Solo renderizar si 'id' y 'datosSkills' son válidos
        return datosSkills?.[id] !== undefined;
      case "cursos":
        return datosCursos?.[id] !== undefined;
      default:
        return false; // En caso de un tipo no soportado, no se renderiza nada.
    }
  };

  const renderContent = () => {
    switch (tipo) {
      case "experiencia":
        return <ModalExperiencia id={id} datosExperiencia={datosExperiencia} />;
      case "formulario":
        return <ModalFormulario />;
      case "proyectos":
        return <ModalProyectos id={id} datosProyectos={datosProyectos} />;
      case "skill":
        return <ModalSkills id={id} datosSkills={datosSkills} />;
      case "cursos":
        return <ModalCursos id={id} datosCursos={datosCursos} />;
      default:
        return null;
    }
  };

  // Si no se cumplen las condiciones, no renderizar el modal
  if (!shouldRenderContent()) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      onClick={handleCloseClick}
      id="modal-background"
    >
      <div className={`p-5 rounded-lg shadow-xl relative theme-${theme}:bg-${theme}-color-1 theme-${theme}:text-${theme}-text-1`}>
        {renderContent()}
        <button
          className="absolute top-2 right-2"
          onClick={closeModal}
          aria-label="Cerrar modal"
        >
          <img src={closeIcon} alt="Close" width="20px" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
