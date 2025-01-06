import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div
      className="static w-full flex justify-evenly bg-gray-100 p-4 shadow-none rounded-none
                md:fixed md:top-16 md:right-4 md:w-auto md:bg-white md:shadow-lg md:rounded-lg md:z-50 md:flex-col md:items-center"
    >
      <button
        onClick={() => changeLanguage('es')}
        className="w-auto px-6 py-2 text-center bg-blue-500 hover:bg-blue-600 text-white rounded transition md:w-full md:mb-2"
      >
        Español
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className="w-auto px-6 py-2 text-center bg-gray-500 hover:bg-gray-600 text-white rounded transition md:w-full"
      >
        English
      </button>
    </div>

  );
};

export default LanguageSelector;