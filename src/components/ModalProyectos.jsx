import { useState, useEffect } from 'react';
import deploySVG from '../assets/icons/deploy.svg';
import githubSVG from '../assets/icons/github.svg';
import importarImagenes from "../helpers/importarImagenes";
import next from '../assets/icons/next.svg';
import previous from '../assets/icons/previous.svg';

const ModalProyectos = ({ id, datosProyectos }) => {
  // Verificar que exista el proyecto con el `id` proporcionado
  const proyecto = datosProyectos?.find(elemento => elemento.Id === id);
  
  if (!proyecto) {
    return <div className="text-center">Datos del proyecto no disponibles.</div>;
  }

  const { Nombre, Descripcion, Deployment, Github, Imagenes } = proyecto;

  const [imagenesImportadas, setImagenesImportadas] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (Imagenes?.length > 0) {
      setIsLoading(true); // Mostrar spinner mientras se cargan todas las imágenes
      importarImagenes(Imagenes, (cargadas) => {
        setImagenesImportadas(cargadas);
        setIsLoading(false); // Ocultar spinner cuando las imágenes están cargadas
      }, "../assets/images/");
    } else {
      setImagenesImportadas([]); // Reiniciar las imágenes si no hay disponibles
      setIsLoading(false);
    }
  }, [Imagenes]); // Dependemos de las imágenes del proyecto actual

  const handleImageLoad = () => {
    setImageLoaded(true); // La imagen actual se ha cargado completamente
  };

  const nextImage = () => {
    if (imagenesImportadas.length > 0) {
      setImageLoaded(false); // Reiniciar el estado de carga para la nueva imagen
      setCurrentImageIndex((currentImageIndex + 1) % imagenesImportadas.length);
    }
  };

  const prevImage = () => {
    if (imagenesImportadas.length > 0) {
      setImageLoaded(false); // Reiniciar el estado de carga para la nueva imagen
      setCurrentImageIndex((currentImageIndex - 1 + imagenesImportadas.length) % imagenesImportadas.length);
    }
  };

  return (
    <div
      className="w-full h-full max-w-3xl max-h-[90vh] p-6 bg-white rounded-xl shadow-lg overflow-y-auto"
      style={{ width: '600px', height: '550px' }}
    >
      <div className="relative flex flex-col justify-center items-center">
        <div className="h-80 w-full flex justify-center items-center relative">
          {isLoading || !imageLoaded ? (
            <div className="absolute flex justify-center items-center h-80 w-full bg-gray-100">
              <span className="text-lg font-semibold text-gray-500">Cargando imagen...</span>
            </div>
          ) : null}
          {imagenesImportadas.length > 0 && (
            <img
              src={imagenesImportadas[currentImageIndex]}
              alt={`Imagen ${currentImageIndex + 1}`}
              className={`rounded-3xl shadow-2xl ${imageLoaded ? 'block' : 'hidden'}`}
              onLoad={handleImageLoad}
            />
          )}
        </div>
        <div
          className={`absolute w-full flex justify-between h-80 top-0 ${
            imagenesImportadas.length > 1 ? 'block' : 'hidden'
          }`}
        >
          <button onClick={prevImage} className="hover:bg-cyan-300 hover:opacity-30 w-28">
            <img src={previous} alt="<" className="w-10" />
          </button>

          <button onClick={nextImage} className="hover:bg-cyan-300 hover:opacity-30 w-28">
            <img src={next} alt=">" className="w-10 float-right" />
          </button>
        </div>

        {/* Indicadores */}
        <div className="mt-4 flex gap-4">
          {imagenesImportadas.map((_, index) => (
            <span
              key={index}
              className={`w-4 h-4 rounded-full ${
                index === currentImageIndex ? 'bg-cyan-500' : 'bg-gray-300'
              }`}
            ></span>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-6 mb-4 text-center">{Nombre}</h2>
      <p className="mb-6 text-center">{Descripcion}</p>
      <div className="flex justify-center gap-3">
        {Deployment && (
          <a href={Deployment} target="_blank" rel="noreferrer">
            <img
              className="p-1 hover:shadow hover:shadow-cyan-400 hover:bg-cyan-400"
              src={deploySVG}
              alt="deploy"
              width="40px"
            />
          </a>
        )}
        {Github && (
          <a href={Github} target="_blank" rel="noreferrer">
            <img
              className="p-1 hover:shadow hover:shadow-cyan-400 hover:bg-cyan-400"
              src={githubSVG}
              alt="github"
              width="40px"
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default ModalProyectos;
