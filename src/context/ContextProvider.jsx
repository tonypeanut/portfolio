import { useState, useEffect, createContext } from 'react'

const Contexto = createContext();

const ContextProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [tipo, setTipo] = useState("");
    const [id, setId] = useState("");
    const [menu, setMenu] = useState([]);

    const openModal = (tipo, id)=> {
        setIsOpen(true);
        setTipo(tipo);
        setId(id);
    }
    const closeModal = ()=>{
        setIsOpen(false);
        setTipo("");
        setId(0);
    } 

    return (
        <Contexto.Provider value={{isOpen, tipo, id, openModal, closeModal, menu, setMenu }}>
            {children}
        </Contexto.Provider>
    )
}

export {
    ContextProvider
}

export default Contexto;