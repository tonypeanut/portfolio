import { useTranslation } from 'react-i18next';
import { links, years } from '../data/profile';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section id="top" className="section pt-20 sm:pt-28">
      <p className="mb-3 font-mono text-sm text-muted">{t('hero.greeting')}</p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Antonio Valdez Aguayo</h1>
      <p className="mt-3 text-xl text-accent sm:text-2xl">{t('hero.role')}</p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{t('hero.tagline')}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a className="btn btn-primary" href="#projects">
          {t('hero.projects')}
        </a>
        <a className="btn" href={links.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a className="btn" href={links.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>

      <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
        {years.map((y) => (
          <div key={y.name}>
            <dt className="font-mono text-xs uppercase tracking-wider text-muted">
              {t('hero.years')} {y.name}
            </dt>
            <dd className="text-3xl font-bold">{y.years}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
