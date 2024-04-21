import { useEffect } from "react";
import Proyectos from "../components/Proyectos";
import useContexto from "../hook/useContexto";

const TodosProyectos = () => {
  const { setMenu } = useContexto();

  useEffect( () => {setMenu(["inicio", "contacto-"])}, []);

  return (
    <>
        <div className=" flex flex-col items-center mt-4">
            <Proyectos/>
        </div>
    </>
  )
}

export default TodosProyectos