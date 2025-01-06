import check from "../assets/icons/check.svg";

const ModalExperiencia = ({ id, datosExperiencia }) => {
  // Verificamos si 'id' y 'datosExperiencia' son válidos antes de acceder a la información
  const experiencia = datosExperiencia?.[id];

  // Si no existe la experiencia con el 'id' proporcionado, mostramos un mensaje de carga o error
  if (!experiencia) {
    return <div>Datos no disponibles o cargando...</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
        {experiencia.Puesto}
      </h2>
      <p className="text-lg text-gray-600 mb-4 text-center">
        {experiencia.Empresa}
      </p>
      <ul className="space-y-3">
        {experiencia.Funciones?.map((funcion, index) => (
          <li key={index} className="flex items-start">
            <img
              src={check}
              alt="->"
              width="20px"
              className="inline mr-3 mt-1"
            />
            <p className="text-gray-700">{funcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModalExperiencia;

