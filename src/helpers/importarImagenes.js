import { getImageURL } from "../utils/image-utils.js"

const importarImagenes = (arrayImagenes, setImagenes, urlBase) => {
    const imagenesImportadas = arrayImagenes.map(
        imagen => {return getImageURL(imagen, urlBase)
        })

    setImagenes(imagenesImportadas);
};

export default importarImagenes;