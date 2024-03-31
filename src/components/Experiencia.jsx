

const Experiencia = ({datosExperiencia}) => {

    return (
      <>
        <div className=" container flex w-3/4 justify-around">
          {datosExperiencia.map((experiencia, i) => (
            <div key={i} className="container bg-gray-200 w-5/12 ml5 mt-5 mb-5 border rounded">
                <p><strong>Puesto:</strong> {experiencia.Puesto}</p>
                <p><strong>Fecha de Inicio:</strong> {experiencia.FechaInicio}</p>
                <p><strong>Fecha de Fin:</strong> {experiencia.FechaFin}</p>
                <p><strong>Empresa:</strong> {experiencia.Empresa}</p>
                <ul>
                  {experiencia.Funciones.map((funcion, i) => (
                    <li key={i}>{funcion}</li>
                  ))}
                </ul>
            </div>
          ))}
        </div>
      </>
    )
}

export default Experiencia