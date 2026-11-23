import { useTranslation } from 'react-i18next';
import { useCarrera } from '../data/carrera';

export default function Experience() {
  const { t } = useTranslation();
  const { experiencia } = useCarrera();
  return (
    <section id="experience" className="section">
      <h2 className="section-title">{t('experience.title')}</h2>
      <ol className="space-y-6">
        {Object.entries(experiencia).map(([id, e]) => (
          <li key={id} className="card">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-lg font-semibold">
                {e.puesto} <span className="text-accent">· {e.empresa}</span>
              </h3>
              <p className="font-mono text-xs text-muted">{e.periodo}</p>
            </div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-muted marker:text-accent">
              {e.logros.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
