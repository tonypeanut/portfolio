import Modal from "./Modal";
import useContexto from '../hook/useContexto';

const Experiencia = ({datosExperiencia}) => {
    const { isOpen, openModal } = useContexto();

    return (
      <>
        { isOpen && (<Modal/>)}

        <h1 id="experiencia" className="text-2xl font-bold">Experiencia laboral</h1>
        <div className="container bg-gray-200 w-3/4 mb-5 border rounded flex flex-col md:flex-row p-5 gap-10 text-left flex-wrap justify-center">
            {datosExperiencia.map((experiencia, i) => (
              <div key={i} className="bg-gray-100 border rounded-lg p-5 shadow-lg hover:bg-cyan-100 w-72 flex flex-col justify-between">
                  <p><strong>Puesto:</strong> {experiencia.Puesto}</p>
                  <p><strong>Fecha de Inicio:</strong> {experiencia.FechaInicio}</p>
                  <p><strong>Fecha de Fin:</strong> {experiencia.FechaFin}</p>
                  <p><strong>Empresa:</strong> {experiencia.Empresa}</p>
                  <div className=" flex justify-center mt-2">
                      <button className=" p-2 rounded-xl from-gray-200 to-gray-400 hover:from-gray-300 hover:to-gray-500 bg-gradient-to-br" onClick={()=>openModal("experiencia",i)}>Más información..</button>
                  </div>
              </div>
            ))}
        </div>
      </>
    )
}
 
export default Experiencia