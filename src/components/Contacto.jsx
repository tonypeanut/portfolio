import Modal from "./Modal";
import useContexto from '../hook/useContexto';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeProvider';

const Contacto = () => {
  const { isOpen, openModal } = useContexto();
  const { t } = useTranslation(); 
  const { theme } = useTheme(); 

  return (
    <>
        { isOpen && (<Modal/>)}
        <button className={`p-5 
                            rounded-xl text-2xl 
                            font-bold mb-5
                            theme-${theme}:bg-${theme}-color-5
                            hover:theme-${theme}:bg-${theme}-color-6
                            theme-${theme}:text-${theme}-text-2`}
                onClick={()=>openModal("formulario")}>{t('contact.button')}</button>
    </>
  )
}

export default Contacto