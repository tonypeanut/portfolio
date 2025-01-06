import { getImageURL } from "../utils/image-utils.js";

const importarImagenes = (arrayImagenes, setImagenes, urlBase) => {
    // Verificar que arrayImagenes es un array
    if (!Array.isArray(arrayImagenes)) {
        console.error("arrayImagenes no es un array válido.");
        return;
    }

    // Verificar que setImagenes es una función
    if (typeof setImagenes !== "function") {
        console.error("setImagenes no es una función válida.");
        return;
    }

    // Verificar que urlBase es un string
    if (typeof urlBase !== "string") {
        console.error("urlBase no es un string válido.");
        return;
    }

    const imagenesImportadas = arrayImagenes.map(imagen => {
        // Verificar que cada elemento del array es un string
        if (typeof imagen !== "string") {
            console.error("Elemento de arrayImagenes no es un string válido:", imagen);
            return null; // Retornar null para manejar posibles errores en el array
        }
        return getImageURL(imagen, urlBase);
    }).filter(imagen => imagen !== null); // Filtrar posibles valores nulos

    setImagenes(imagenesImportadas);
};

export default importarImagenes;