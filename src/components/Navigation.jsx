import { Link } from 'react-router-dom';
import Modal from "./Modal";
import useContexto from '../hook/useContexto';
import { useTranslation } from "react-i18next";
import { useTheme } from '../context/ThemeProvider';

const Navigation = () => {
  const { isOpen, openModal, menu } = useContexto();
  const { t } = useTranslation(); 
  const { theme } = useTheme(); 

  
  const mostrarMenu = menu.reduce((acc, valor) => {
     acc[valor] = valor;
     return acc
  }, {});
  
  return (
    <>
        { isOpen && (<Modal/>)}
        <nav className="font-semibold flex">
            {mostrarMenu.inicio && <Link to="/" className={`p-4 hover:theme-${theme}:bg-${theme}-color-6`}>{t('navigation.inicio')}</Link>}
            {mostrarMenu.presentacion && <a href="#presentacion" className={`p-4 hover:theme-${theme}:bg-${theme}-color-6`}>{t('navigation.presentacion')}</a>}
            {mostrarMenu.acerca && <a href="#acerca" className={`p-4 hover:theme-${theme}:bg-${theme}-color-6`}>{t('navigation.acerca')}</a>}
            {mostrarMenu.skills && <a href="#skills" className={`p-4 hover:theme-${theme}:bg-${theme}-color-6`}>{t('navigation.skills')}</a>}
            {mostrarMenu.experiencia && <a href="#experiencia" className={`p-4 hover:theme-${theme}:bg-${theme}-color-6`}>{t('navigation.experiencia')}</a>}
            {mostrarMenu.proyectos && <a href="#proyectos" className={`p-4 hover:theme-${theme}:bg-${theme}-color-6`}>{t('navigation.proyectos')}</a>}
            {mostrarMenu.cursos && <Link to="/cursos" className={`p-4 hover:theme-${theme}:bg-${theme}-color-6`}>{t('navigation.cursos')}</Link>}
            {mostrarMenu.contacto && <button className={`p-4 hover:theme-${theme}:bg-${theme}-color-6`} onClick={()=>openModal("formulario")}>{t('navigation.contacto')}</button>}
        </nav>
    </>
    
  )
}

export default Navigation