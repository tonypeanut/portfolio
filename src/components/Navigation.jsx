import { Link } from 'react-router-dom';
import Modal from "./Modal";
import useContexto from '../hook/useContexto';
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { isOpen, openModal, menu } = useContexto();
  const { t } = useTranslation(); 
  
  const mostrarMenu = menu.reduce((acc, valor) => {
     acc[valor] = valor;
     return acc
  }, {});
  
  return (
    <>
        { isOpen && (<Modal/>)}
        <nav className="font-semibold flex">
            {mostrarMenu.inicio && <Link to="/" className=" p-4 hover:bg-slate-600">{t('navigation.inicio')}</Link>}
            {mostrarMenu.acerca && <a href="#acerca" className=" p-4 hover:bg-slate-600">{t('navigation.acerca')}</a>}
            {mostrarMenu.skills && <a href="#skills" className=" p-4 hover:bg-slate-600">{t('navigation.skills')}</a>}
            {mostrarMenu.experiencia && <a href="#experiencia" className=" p-4 hover:bg-slate-600">{t('navigation.experiencia')}</a>}
            {mostrarMenu.proyectos && <a href="#proyectos" className=" p-4 hover:bg-slate-600">{t('navigation.proyectos')}</a>}
            {mostrarMenu.contacto && <button className=" p-4 hover:bg-slate-600" onClick={()=>openModal("formulario")}>{t('navigation.contacto')}</button>}
        </nav>
    </>
    
  )
}

export default Navigation