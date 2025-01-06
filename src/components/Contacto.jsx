import Modal from "./Modal";
import useContexto from '../hook/useContexto';
import { useTranslation } from 'react-i18next';

const Contacto = () => {
  const { isOpen, openModal } = useContexto();
  const { t } = useTranslation(); 

  return (
    <>
        { isOpen && (<Modal/>)}
        <button className=" from-cyan-300 to-cyan-500  hover:from-cyan-400 hover:to-cyan-600 bg-gradient-to-br p-5 rounded-xl text-2xl font-bold mb-5" onClick={()=>openModal("formulario")}>{t('contact.button')}</button>
    </>
  )
}

export default Contacto