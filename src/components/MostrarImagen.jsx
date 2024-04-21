import React from 'react'
import Spinner from './spinner';

const MostrarImagen = ({imagen, nombre, clases, onClick}) => {
  let nombreImagen = null

  if (imagen){
    const ultimoDiagonal = imagen.lastIndexOf("/");
    nombreImagen = imagen.substring(ultimoDiagonal + 1);
  }

  return (
    <>
        {nombreImagen && (<>
            
          {!imagen && <Spinner/>}
          <img src={imagen} alt={`Imagen ${nombre}`} className={` ${!imagen ? 'hidden' : 'block'} ${clases}`} onClick={onClick}/>
            
        </>)}
    </>
  )
}

export default MostrarImagen