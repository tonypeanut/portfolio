import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const sections = ['about', 'experience', 'leadership', 'stack', 'projects', 'education', 'contact'];

function readTheme() {
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

export default function Header() {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState(readTheme);
  const lang = (i18n.resolvedLanguage || 'en').slice(0, 2);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* storage unavailable: theme just won't persist */
    }
  }, [theme]);

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="font-mono text-sm font-semibold text-accent">
          tonypeanut
        </a>
        <nav aria-label="Main" className="hidden gap-5 text-sm text-muted md:flex">
          {sections.map((s) => (
            <a key={s} href={`#${s}`} className="hover:text-ink">
              {t(`nav.${s}`)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="btn px-3 py-1 font-mono text-xs"
            aria-label={t('nav.language')}
            onClick={() => i18n.changeLanguage(lang === 'es' ? 'en' : 'es')}
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button
            type="button"
            className="btn px-3 py-1 text-xs"
            aria-label={t('nav.theme')}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
        </div>
      </div>
    </header>
  );
}
