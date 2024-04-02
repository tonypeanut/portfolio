import datos from '../data/datos.json'
import check from '../assets/icons/check.svg'

const ModalExperiencia = ({id}) => {
  const { datosExperiencia } = datos;

  const { Empresa, Puesto, FechaInicio, FechaFin, Funciones } = datosExperiencia[parseInt(id)];

  return (
    <>
      <div>
          <p><strong>Puesto:</strong> {Puesto}</p>
          <p><strong>Fecha de Inicio:</strong> {FechaInicio}</p>
          <p><strong>Fecha de Fin:</strong> {FechaFin}</p>
          <p><strong>Empresa:</strong> {Empresa}</p>
          <ul>
              {Funciones.map((funcion,i)=>(
                  <li key={i}>
                      <img className=" inline mr-1" src={check} alt="->" width="15px"/>
                      {funcion}
                  </li>
              ))}
          </ul>

      </div>
    </>
  )
}

export default ModalExperiencia 