import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import i18n from './languages/i18n'; // Asegúrate de que este archivo inicializa correctamente i18n
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from './context/ThemeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <Suspense fallback={<div>Loading translations...</div>}>
          <App />
        </Suspense>
      </ThemeProvider>
    </I18nextProvider>
  </React.StrictMode>
);
