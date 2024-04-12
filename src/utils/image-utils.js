function getImageURL(name, urlBase){
    return new URL(`${urlBase}${name}`, import.meta.url).href;
}

export { getImageURL }