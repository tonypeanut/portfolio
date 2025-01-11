import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeProvider';

function Presentacion() {
  const { t } = useTranslation(); 
  const { theme } = useTheme();
  
  return (
    <>
        <h1 id="presentacion" className={`text-2xl font-bold mt-3 theme-${theme}:text-${theme}-text-1`}>{t('presentation.title')}</h1>
        <div className={`container w-full mb-5 border rounded tablet:w-3/5 theme-${theme}:bg-${theme}-color-2 theme-${theme}:text-${theme}-text-1`}>
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