import Presentacion from "../components/Presentacion";
import Acerca from "../components/Acerca";
import Skills from "../components/Skills";
import Experiencia from "../components/Experiencia";
import Proyectos from "../components/Proyectos";
import Contacto from "../components/Contacto";

import datos from '../data/datos.json'

const Inicio = () => {
  const { datosCursos, datosExperiencia, datosSkills, datosSoftskills} = datos

  return (
    <>
        <div className=" flex flex-col items-center">
            <Presentacion/>
            <Acerca/>
            <Skills/>
            <Experiencia datosExperiencia={datosExperiencia}/>
            <Proyectos/>
            <Contacto/>


        </div>
    </>
  )
}

export default Inicio