import { useTranslation } from 'react-i18next';
import { useCarrera } from '../data/carrera';

export default function Leadership() {
  const { t } = useTranslation();
  const { liderazgo } = useCarrera();
  return (
    <section id="leadership" className="section">
      <h2 className="section-title">{t('leadership.title')}</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {Object.entries(liderazgo).map(([id, x]) => (
          <div key={id} className="card">
            <h3 className="font-semibold">{x.titulo}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{x.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
