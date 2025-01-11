import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('gray'); // Tema por defecto

  const themes = ['gray', 'blue', 'green', 'red', 'purple']; // Lista de temas disponibles

  const toggleTheme = (newTheme) => {
    setTheme(newTheme || themes[(themes.indexOf(theme) + 1) % themes.length]);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
