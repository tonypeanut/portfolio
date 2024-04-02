import Modal from "./Modal";
import useContexto from '../hook/useContexto';

const Proyectos = ({datosProyectos}) => {
  const { isOpen, openModal } = useContexto();

  return (
    <>
      { isOpen && (<Modal/>)}
      <h1 className="text-2xl font-bold">Proyectos</h1>
      <div className="container bg-gray-200 w-3/4 mb-5 border rounded flex flex-col md:flex-row p-5 gap-5 text-left">
            {datosProyectos.map((proyecto, i) => (
              <div key={i} className="bg-gray-100 border rounded-lg p-5 shadow-lg hover:bg-cyan-100" >
                  <p><strong>Proyecto:</strong> {proyecto.Nombre}</p>
                  <div className=" flex justify-center mt-2">
                      <button className="p-2 rounded-xl from-gray-200 to-gray-400 hover:from-gray-300 hover:to-gray-500 bg-gradient-to-br" onClick={()=>openModal("proyectos",i)}>Más información..</button>
                  </div>
              </div>
            ))}
      </div>
  </>
  )
}

export default Proyectos