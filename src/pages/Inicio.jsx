import Presentacion from "../components/Presentacion";
import Acerca from "../components/Acerca";
import Skills from "../components/Skills";
import Experiencia from "../components/Experiencia";
import Proyectos from "../components/Proyectos";
import Contacto from "../components/Contacto";

const Inicio = () => {
  return (
    <>
        <div className=" flex flex-col items-center">
            <Presentacion/>
            <Acerca/>
            <Skills/>
            <Experiencia/>
            <Proyectos/>
            <Contacto/>


        </div>
    </>
  )
}

export default Inicio