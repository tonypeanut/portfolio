import { useTranslation } from 'react-i18next';
import { stack } from '../data/carrera';

export default function Stack() {
  const { t } = useTranslation();
  return (
    <section id="stack" className="section">
      <h2 className="section-title">{t('stack.title')}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {stack.map((g) => (
          <div key={g.id} className="card">
            <h3 className="mb-3 text-sm font-semibold">{t(`stack.groups.${g.id}`)}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <li key={i} className="chip">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
