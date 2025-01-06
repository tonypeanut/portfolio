import Modal from "./Modal";
import useContexto from '../hook/useContexto';
import { useTranslation } from 'react-i18next';

const Experiencia = ({ datosExperiencia }) => {
    const { isOpen, openModal } = useContexto();
    const { t } = useTranslation();

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

            <h1 id="experiencia" className="text-2xl font-bold">{t('experience.title')}</h1>
            <div className="container bg-gray-200 tablet:w-3/5 w-full mb-5 border rounded flex flex-col md:flex-row p-5 gap-5 laptop:gap-10 text-left flex-wrap justify-center">
                {datosExperiencia.map((experiencia, i) => (
                    <div key={i} className="bg-gray-100 border rounded-lg p-5 shadow-lg hover:bg-cyan-100 w-full flex flex-col justify-between laptop:w-72">
                        <p><strong>{t('experience.field-1')}</strong> {experiencia.Puesto || 'N/A'}</p>
                        <p><strong>{t('experience.field-2')}</strong> {experiencia.FechaInicio || 'N/A'}</p>
                        <p><strong>{t('experience.field-3')}</strong> {experiencia.FechaFin || 'N/A'}</p>
                        <p><strong>{t('experience.field-4')}</strong> {experiencia.Empresa || 'N/A'}</p>
                        <div className="flex justify-center mt-2">
                            <button className="p-2 rounded-xl from-gray-200 to-gray-400 hover:from-gray-300 hover:to-gray-500 bg-gradient-to-br" onClick={() => openModal("experiencia", i)}>
                                {t('experience.button')}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Experiencia;
