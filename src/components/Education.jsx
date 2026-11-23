import { useTranslation } from 'react-i18next';
import { useCarrera } from '../data/carrera';

export default function Education() {
  const { t } = useTranslation();
  const { formacion } = useCarrera();
  return (
    <section id="education" className="section">
      <h2 className="section-title">{t('education.title')}</h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {Object.entries(formacion).map(([id, f]) => (
          <li key={id} className="card">
            <h3 className="font-semibold">{f.titulo}</h3>
            <p className="mt-1 text-sm text-muted">{f.lugar}</p>
            <p className="mt-2 font-mono text-xs text-muted">{f.periodo}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
