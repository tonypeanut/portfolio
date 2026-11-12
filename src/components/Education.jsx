import { useTranslation } from 'react-i18next';
import { educationIds } from '../data/profile';

export default function Education() {
  const { t } = useTranslation();
  return (
    <section id="education" className="section">
      <h2 className="section-title">{t('education.title')}</h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {educationIds.map((id) => {
          const base = `education.items.${id}`;
          return (
            <li key={id} className="card">
              <h3 className="font-semibold">{t(`${base}.name`)}</h3>
              <p className="mt-1 text-sm text-muted">{t(`${base}.place`)}</p>
              <p className="mt-2 font-mono text-xs text-muted">{t(`${base}.period`)}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
