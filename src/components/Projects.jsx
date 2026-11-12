import { useTranslation } from 'react-i18next';
import { projects, wip } from '../data/profile';

export default function Projects() {
  const { t } = useTranslation();
  return (
    <section id="projects" className="section">
      <h2 className="section-title">{t('projects.title')}</h2>
      <p className="mb-6 text-muted">{t('projects.intro')}</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.id} className="card flex flex-col">
            <h3 className="font-mono text-base font-semibold">{p.name}</h3>
            <p className="mt-2 flex-1 text-muted">{t(`projects.items.${p.id}`)}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((x) => (
                <li key={x} className="chip">
                  {x}
                </li>
              ))}
            </ul>
            <a
              className="mt-4 text-sm font-medium text-accent hover:underline"
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('projects.code')} →
            </a>
          </article>
        ))}
      </div>

      <h3 className="mb-2 mt-12 font-semibold">{t('projects.wip.title')}</h3>
      <p className="mb-6 text-muted">{t('projects.wip.intro')}</p>
      <div className="grid gap-4 sm:grid-cols-3">
        {wip.map((p) => (
          <article key={p.id} className="card flex flex-col">
            <h4 className="font-mono text-sm font-semibold">{p.name}</h4>
            <p className="mt-2 flex-1 text-sm text-muted">{t(`projects.wip.items.${p.id}`)}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((x) => (
                <li key={x} className="chip">
                  {x}
                </li>
              ))}
              <li className="chip border-accent text-accent">{t('projects.private')}</li>
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
