import { useTranslation } from 'react-i18next';
import { experienceIds } from '../data/profile';

export default function Experience() {
  const { t } = useTranslation();
  return (
    <section id="experience" className="section">
      <h2 className="section-title">{t('experience.title')}</h2>
      <ol className="space-y-6">
        {experienceIds.map((id) => {
          const base = `experience.items.${id}`;
          const bullets = t(`${base}.bullets`, { returnObjects: true });
          return (
            <li key={id} className="card">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-lg font-semibold">
                  {t(`${base}.role`)} <span className="text-accent">· {t(`${base}.company`)}</span>
                </h3>
                <p className="font-mono text-xs text-muted">{t(`${base}.period`)}</p>
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-muted marker:text-accent">
                {Array.isArray(bullets) && bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
