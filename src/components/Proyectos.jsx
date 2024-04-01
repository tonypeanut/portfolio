import Modal from "./Modal";
import useContexto from '../hook/useContexto';

const Proyectos = ({datosProyectos}) => {
  const { isOpen, openModal } = useContexto();

  return (
    <>
        { isOpen && (<Modal/>)}

        <div className="container bg-gray-200 w-3/4 ml5 mt-5 mb-5 border rounded flex flex-col p-5">
        <h1>Proyectos</h1>
        <div className="flex gap-5 text-left mt-3 ">
            {datosProyectos.map((proyecto, i) => (
              <div key={i} className="bg-gray-100 border rounded-lg p-5 shadow-lg hover:bg-cyan-100" >
                  <p><strong>Proyecto:</strong> {proyecto.Nombre}</p>
                  <div className=" flex justify-center mt-2">
                      <button className=" bg-gray-400 p-2 rounded-xl hover:bg-gray-500" onClick={()=>openModal("proyectos",i)}>Más información..</button>
                  </div>
              </div>
            ))}
        </div>
      </div>
  </>
  )
}

export default Proyectos