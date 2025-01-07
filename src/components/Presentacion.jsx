import { useTranslation } from 'react-i18next';

function Presentacion() {
  const { t } = useTranslation(); 
  
  return (
    <>
        <h1 id="presentacion" className=" text-2xl font-bold mt-3">{t('presentation.title')}</h1>
        <div className="container bg-gray-200 w-full mb-5 border rounded tablet:w-3/5">
            <div className=" m-5">
                <p>{t('presentation.content-p1')}</p>
                <p>{t('presentation.content-p2')}</p>
                <p>{t('presentation.content-p3')}</p>
            </div>
        </div>
    </>
  )
}

export default Presentacion