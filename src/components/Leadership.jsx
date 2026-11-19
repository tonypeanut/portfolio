import { useTranslation } from 'react-i18next';
import { leadershipIds } from '../data/profile';

export default function Leadership() {
  const { t } = useTranslation();
  return (
    <section id="leadership" className="section">
      <h2 className="section-title">{t('leadership.title')}</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {leadershipIds.map((id) => (
          <div key={id} className="card">
            <h3 className="font-semibold">{t(`leadership.items.${id}.title`)}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{t(`leadership.items.${id}.text`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
