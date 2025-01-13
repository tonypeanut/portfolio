import { Link } from "react-router-dom";
import Modal from "./Modal";
import useContexto from '../hook/useContexto';
import { useEffect } from "react";

import menuSVG from "../assets/icons/menu.svg";
import { useTranslation } from "react-i18next";
import { useTheme } from '../context/ThemeProvider';

const MenuDesplegable = () => {
  const { isOpen, openModal, menu } = useContexto();
  const { t } = useTranslation(); 
  const { theme } = useTheme();
  
  const mostrarMenu = menu.reduce((acc, valor) => {
     acc[valor] = valor;
     return acc
  }, {});

  useEffect(() => {
      const details = document.querySelector('details');
      const summary = document.querySelector('summary');
      document.addEventListener('click', e => {
        if (summary === e.target || e.target.classList.contains('menuSVG')){
            return;
        } else {
            details.removeAttribute('open');
        }
        
      })
  }, []);

  return (
    <>
        { isOpen && (<Modal/>)}
        <details className="dropdown h-full w-24">
            <summary className="w-full h-full flex justify-center"><img className="menuSVG" src={menuSVG} alt="Menú" width="40px" /></summary>
            <ul className={`dropdown-content z-[1] w-24 theme-${theme}:bg-${theme}-color-5`}>
                {mostrarMenu.inicio && <li><div className=" text-center p-1 w-full"><Link to="/">{t('navigation.inicio')}</Link></div></li>}
                {mostrarMenu.acerca && <li><div className=" text-center p-1 w-full"><a href="#acerca">{t('navigation.acerca')}</a></div></li>}
                {mostrarMenu.skills && <li><div className=" text-center p-1 w-full" ><a href="#skills">{t('navigation.skills')}</a></div></li>}
                {mostrarMenu.experiencia && <li><div className=" text-center p-1 w-full"><a href="#experiencia">{t('navigation.experiencia')}</a></div></li>}
                {mostrarMenu.proyectos && <li><div className=" text-center p-1 w-full"><a href="#proyectos">{t('navigation.proyectos')}</a></div></li>}
                {mostrarMenu.proyectos && <li><div className=" text-center p-1 w-full"><Link to="/cursos">{t('navigation.cursos')}</Link></div></li>}
                {mostrarMenu.contacto && <li><div className=" text-center p-1 w-full"><button onClick={()=>openModal("formulario")}>{t('navigation.contacto')}</button></div></li>}
            </ul>
        </details>
    </>
  )
}

export default MenuDesplegable