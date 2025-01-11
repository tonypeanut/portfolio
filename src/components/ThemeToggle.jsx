import React from 'react';
import { useTheme } from '../context/ThemeProvider';
import { useTranslation } from 'react-i18next';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme(); // Usar contexto para obtener y cambiar el tema
  const { t } = useTranslation();

  const themes = ['gray', 'blue', 'green', 'red', 'purple']; // Lista de temas disponibles

  return (
    <div className="pt-1">
      <div 
        className={`static w-full md:w-[130px] flex flex-col p-4 shadow-none rounded-none md:fixed md:top-48 md:right-4 md:shadow-lg md:rounded-lg     md:z-50 md:items-center mt-0 theme-${theme}:bg-${theme}-neutral`}
      >
        <label 
          className={`w-auto px-2 py-2 text-center rounded transition md:w-full md:mb-2
                    theme-${theme}:bg-${theme}-color-5 theme-${theme}:text-${theme}-text-2 `}
        >
          {t('temas.descripcion')}
        </label>

        <div className="flex flex-wrap justify-evenly lg:flex-col md:justify-center mt-4">
          {themes.map((t) => (
            <div
              key={t}
              className={` m-1 w-8 h-8 rounded-full mb-2 cursor-pointer transition bg-${t}-400 hover:bg-${t}-600 
                          ${t === theme ? 'ring-4 ring-offset-2 ring-yellow-500' : ''}`}
              onClick={() => toggleTheme(t)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ThemeToggle;
