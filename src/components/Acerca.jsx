import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeProvider';

const Acerca = () => {
  const { t } = useTranslation();
  const { theme } = useTheme(); 

  return (
    <>
      <h1 id="acerca" className={`text-2xl font-bold theme-${theme}:text-${theme}-text-1`}>{t('about.title')}</h1>
      <div className={`container tablet:w-3/5 w-full mb-5 border rounded theme-${theme}:bg-${theme}-color-2 theme-${theme}:text-${theme}-text-1`}>
        <div className="m-5">
          <p>{t('about.description')}</p>
        </div>
      </div>
    </>
  );
};

export default Acerca;