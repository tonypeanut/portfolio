import { useContext } from 'react';
import Contexto from '../context/ContextProvider';

const useConexto = () =>{
    return useContext(Contexto);
}

export default useConexto;