import Modal from "../Modal";
import useContexto from '../../hook/useContexto';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeProvider';

const Experiencia = ({ datosExperiencia }) => {
    const { isOpen, openModal } = useContexto();
    const { t } = useTranslation();
    const { theme } = useTheme(); 

    // Verificar que datosExperiencia es un array
    if (!Array.isArray(datosExperiencia)) {
        console.error("datosExperiencia no es un array válido.");
        return null; // Retornar null para no renderizar el componente
    }

    // Verificar que isOpen y openModal están definidos
    if (typeof isOpen === 'undefined' || typeof openModal !== 'function') {
        console.error("El contexto no está correctamente definido.");
        return null; // Retornar null para no renderizar el componente
    }

    return (
        <>
            {isOpen && <Modal datosExperiencia={datosExperiencia} />}

            <section id="experiencia" className='w-full py-2 px-5 md:px-40 lg:px-60'>
                <h1 className={`text-2xl text-center font-bold theme-${theme}:text-${theme}-text-1`}>{t('experience.title')}</h1>
                <div className={`border rounded theme-${theme}:bg-${theme}-color-2 theme-${theme}:text-${theme}-text-1`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
                        {datosExperiencia.map((experiencia, i) => (
                                <div key={i} className={`border rounded-lg p-5 shadow-lg flex flex-col justify-between h-full theme-${theme}:bg-${theme}-color-1`}>
                                    <p><strong>{t('experience.field-1')}</strong> {experiencia.Puesto || 'N/A'}</p>
                                    <p><strong>{t('experience.field-2')}</strong> {experiencia.FechaInicio || 'N/A'}</p>
                                    <p><strong>{t('experience.field-3')}</strong> {experiencia.FechaFin || 'N/A'}</p>
                                    <p><strong>{t('experience.field-4')}</strong> {experiencia.Empresa || 'N/A'}</p>
                                    <div className="flex justify-center mt-2">
                                        <button className={`font-bold p-2 rounded-xl theme-${theme}:bg-${theme}-color-5 hover:theme-${theme}:bg-${theme}-color-6 theme-${theme}:text-${theme}-text-2`} onClick={() => openModal("experiencia", i)}>
                                            {t('experience.button')}
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Experiencia;
