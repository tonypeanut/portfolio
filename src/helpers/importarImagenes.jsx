const importarImagenes = async (arrayImagenes, setImagenes, urlBase) => {

    function getImageURL(name){
        return new URL(`${urlBase}${name}`, import.meta.url);
    }

    const imagenesImportadas = await Promise.all(
        arrayImagenes.map(async (imagen) => {
            return getImageURL(imagen);    
        })
    );
    setImagenes(imagenesImportadas);
};

export default importarImagenes;