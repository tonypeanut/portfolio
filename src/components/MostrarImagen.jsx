import React from 'react'
import Spinner from './spinner';

const MostrarImagen = ({imagen, nombre, clases, onClick}) => {
  return (
    <>
        {!imagen && <Spinner/>}
        <img src={imagen} alt={`Imagen ${nombre}`} className={` ${!imagen ? 'hidden' : 'block'} ${clases}`} onClick={onClick}/>
    </>
  )
}

export default MostrarImagen