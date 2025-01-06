import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './en.json'
import esTranslation from './es.json'


i18n
  .use(LanguageDetector) // Detecta automáticamente el idioma del navegador
  .use(initReactI18next) // Pasamos i18n al react-i18next
  .init({
    resources: {
      en: enTranslation,
      es: esTranslation,
    },
    fallbackLng: "es", // Idioma predeterminado si no se detecta
    interpolation: {
      escapeValue: false, // React ya maneja la seguridad contra XSS
    },
  });

export default i18n;
