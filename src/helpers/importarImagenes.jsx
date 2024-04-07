const importarImagenes = async (arrayImagenes, setImagenes, urlBase) => {
    const imagenesImportadas = await Promise.all(
        arrayImagenes.map(async (imagen) => {
        const url = `${urlBase}${imagen}`
        if (imagen) {
            const imagenImportada = await import(url /* @vite-ignore */);
            return imagenImportada.default;
        }
        return "";
        
      })
    );
    setImagenes(imagenesImportadas);

};

export default importarImagenes;