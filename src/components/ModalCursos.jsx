import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeProvider';

const ModalSkills = ({ id, datosCursos }) => {
    const { t } = useTranslation()
    const { theme } = useTheme()
    const formacion = datosCursos?.[id];
    const { cursos } = formacion

    if (!formacion) {
      return <div>Datos no disponibles o cargando...</div>;
    }

    console.log(cursos)

    return (
        <div className='p-6 rounded-lg max-w-md mx-auto overflow-y-auto max-h-[90vh]'>
            <h2 className="text-2xl font-bold mb-2 text-center" >
                {formacion.programa} - {formacion.proveedor}
            </h2>

            {(cursos).map((curso, i) => (
                <div
                key={i}
                    className={`border rounded-lg p-2 m-2 shadow-lg flex flex-col justify-between h-full theme-${theme}:bg-${theme}-color-2 hover:theme-${theme}:bg-${theme}-color-4`}
                >
                    <a 
                        href={curso.certificado}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {curso.fecha} - {curso.nombre} - {curso.horas} {t('cursos.horas')}
                    </a>
                </div>
            ))}

        </div>
    );
};

export default ModalSkills;
