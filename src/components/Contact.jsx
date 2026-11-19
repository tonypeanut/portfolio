import { useTranslation } from 'react-i18next';
import { links } from '../data/profile';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="section">
      <h2 className="section-title">{t('contact.title')}</h2>
      <p className="max-w-xl text-lg text-muted">{t('contact.text')}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a className="btn btn-primary" href={links.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a className="btn" href={links.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {links.email && (
          <a className="btn" href={`mailto:${links.email}`}>
            {t('contact.email')}
          </a>
        )}
      </div>
    </section>
  );
}
