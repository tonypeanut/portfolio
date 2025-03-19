import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeProvider';


const Acerca = () => {
  const { t } = useTranslation();
  const { theme } = useTheme(); 

  return (
    <>
      <section id="acerca" className='w-full py-2 px-5 md:px-40 lg:px-60'>
        <h1 className={`text-2xl text-center font-bold theme-${theme}:text-${theme}-text-1`}>{t('about.title')}</h1>
        <div className={`border rounded theme-${theme}:bg-${theme}-color-2 theme-${theme}:text-${theme}-text-1`}>
          <div className="p-5">
            <p>{t('about.description')}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Acerca;