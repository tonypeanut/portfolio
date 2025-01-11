import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeProvider';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const { theme } = useTheme(); 

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className='pt-1'>
      <div 
        className={`static w-full flex justify-evenly p-4 shadow-none rounded-none 
                    md:fixed md:top-16 md:right-4 md:w-[130px] md:shadow-lg md:rounded-lg md:z-50 md:flex-col md:items-center 
                    mt-[60px] md:mt-0 theme-${theme}:bg-${theme}-neutral`}
      >
        <button
          onClick={() => changeLanguage('es')}
          className={`w-auto px-6 py-2 text-center rounded transition md:w-full md:mb-2
                      theme-${theme}:bg-${theme}-color-5 hover:theme-${theme}:bg-${theme}-color-6 theme-${theme}:text-${theme}-text-2 
                      ${i18n.language === 'es' ? 'ring-4 ring-offset-2 ring-yellow-500' : ''}`}
        >
          Español
        </button>
        <button
          onClick={() => changeLanguage('en')}
          className={`w-auto px-6 py-2 text-center rounded transition md:w-full
                      theme-${theme}:bg-${theme}-color-3 hover:theme-${theme}:bg-${theme}-color-4 theme-${theme}:text-${theme}-text-1
                      ${i18n.language === 'en' ? 'ring-4 ring-offset-2 ring-yellow-500' : ''}`}
        >
          English
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;
