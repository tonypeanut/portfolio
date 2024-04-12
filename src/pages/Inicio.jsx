import { useEffect } from "react";
import Presentacion from "../components/Presentacion";
import Acerca from "../components/Acerca";
import Skills from "../components/Skills";
import Experiencia from "../components/Experiencia";
import Proyectos from "../components/Proyectos";
import Contacto from "../components/Contacto";

import datos from '../data/datos.json';

import useContexto from '../hook/useContexto';
import { useFetcher } from "react-router-dom";

const Inicio = () => {
  const { datosExperiencia, datosSkills, datosSoftskills } = datos
  const { setMenu } = useContexto();

  useEffect( () => {setMenu(["inicio", "acerca", "skills", "experiencia", "proyectos", "contacto"])}, []);
  
  return (
    <>
        <div className=" flex flex-col items-center">
            <Presentacion/>
            <Acerca/>
            <Skills datosSkills={datosSkills} datosSoftskills={datosSoftskills}/>
            <Experiencia datosExperiencia={datosExperiencia}/>
            <Proyectos limit={6}/>
            <Contacto/>
        </div>
    </>
  )
}

export default Inicio