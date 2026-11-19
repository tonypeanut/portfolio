import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function VideoModal({ project, onClose }) {
  const { t } = useTranslation();
  const closeRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const previous = document.activeElement;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const v = videoRef.current;
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      if (v) v.pause();
      if (previous && previous.focus) previous.focus();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={project.name}
        className="w-full max-w-4xl rounded-xl border border-line bg-surface p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-3 flex items-center justify-between gap-4">
          <h3 className="font-mono text-sm font-semibold">{project.name}</h3>
          <button ref={closeRef} type="button" className="btn px-3 py-1 text-xs" onClick={onClose}>
            {t('projects.video.close')} ✕
          </button>
        </div>
        <video
          ref={videoRef}
          className="aspect-video w-full rounded-lg bg-black"
          src={project.video.full}
          poster={project.video.poster}
          controls
          autoPlay
          playsInline
          preload="metadata"
        />
        <p className="mt-3 text-sm text-muted">{t(`projects.wip.items.${project.id}`)}</p>
      </div>
    </div>
  );
}
