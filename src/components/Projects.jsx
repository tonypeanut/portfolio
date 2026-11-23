import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { projects, videoFor } from '../data/profile';
import { useCarrera, wipProjects } from '../data/carrera';
import VideoPreview from './VideoPreview';
import VideoModal from './VideoModal';

export default function Projects() {
  const { t } = useTranslation();
  const { proyectos } = useCarrera();
  const wip = wipProjects.map((p) => ({ id: p.id, name: p.nombre, tech: p.tech, video: videoFor(p.id) }));
  const [open, setOpen] = useState(null);
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
            {p.video && <VideoPreview video={p.video} name={p.name} onOpen={() => setOpen(p)} />}
            <h4 className="font-mono text-sm font-semibold">{p.name}</h4>
            <p className="mt-2 flex-1 text-sm text-muted">{proyectos[p.id]}</p>
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
      {open && <VideoModal project={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
