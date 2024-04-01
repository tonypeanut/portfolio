import Modal from "./Modal";
import useContexto from '../hook/useContexto';

const Experiencia = ({datosExperiencia}) => {
    const { isOpen, openModal } = useContexto();

    return (
      <>
        { isOpen && (<Modal/>)}

        <div className="container bg-gray-200 w-3/4 ml5 mt-5 mb-5 border rounded flex flex-col">
          <div className=" p-5">
              <h1>Experiencia laboral</h1>
              <div className=" flex flex-wrap mt-3 gap-2 lg:gap-5">
                  {datosExperiencia.map((experiencia, i) => (
                    <div key={i} className="bg-gray-100  ml5 mb-5 border rounded-lg p-5 shadow-lg hover:bg-cyan-100 text-left">
                        <p><strong>Puesto:</strong> {experiencia.Puesto}</p>
                        <p><strong>Fecha de Inicio:</strong> {experiencia.FechaInicio}</p>
                        <p><strong>Fecha de Fin:</strong> {experiencia.FechaFin}</p>
                        <p><strong>Empresa:</strong> {experiencia.Empresa}</p>
                        <div className=" flex justify-center mt-2">
                            <button className=" bg-gray-400 p-2 rounded-xl hover:bg-gray-500" onClick={()=>openModal("experiencia",i)}>Más información..</button>
                        </div>
                    </div>
                  ))}
              </div>
          </div>
        </div>
      </>
    )
}

export default Experiencia