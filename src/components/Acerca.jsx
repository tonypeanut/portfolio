import { useTranslation } from 'react-i18next';

const Acerca = () => {
  const { t } = useTranslation(); 

  return (
    <>
      <div id="acerca "></div>
      <h1 className="text-2xl font-bold">{t('about.title')}</h1>
      <div className="container bg-gray-200 tablet:w-3/5 w-full mb-5 border rounded">
        <div className="m-5">
          <p>{t('about.description')}</p>
        </div>
      </div>
    </>
  );
};

export default Acerca;