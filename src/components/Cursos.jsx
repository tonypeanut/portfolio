import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeProvider';
import useContexto from "../hook/useContexto";
import Modal from "./Modal";

const Cursos = ({ datosCursos }) => {
    const { theme } = useTheme()
    const { t } = useTranslation()
    const { isOpen, openModal } = useContexto();

  return (
    <>
      {isOpen && <Modal datosCursos={datosCursos}/>}

      <h1 id="cursos" className={`text-4xl p-4 font-bold theme-${theme}:text-${theme}-text-1`}>{t('cursos.title')}</h1>
      <div className={`container tablet:w-3/5 w-full mb-5 border rounded theme-${theme}:bg-${theme}-color-2 theme-${theme}:text-${theme}-text-1`}>
        <div className="m-5">
            {(datosCursos).map((formacion, i) => (
                <div
                    key={i}
                    className={`border rounded-lg p-4 m-4 shadow-lg flex flex-col justify-between h-full theme-${theme}:bg-${theme}-color-1 hover:theme-${theme}:bg-${theme}-color-4`} 
                    onClick={() => openModal("cursos", i)}   
                >
                    <h2 className='text-2xl font-bold'>{t('cursos.formacion')} : {formacion.programa}</h2>
                    <p className='text-xl'>{t('cursos.proveedor')} : {formacion.proveedor}</p>
                    <p className='text-xl'>{t('cursos.horas')} : {formacion.total_horas}</p>
                </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Cursos;