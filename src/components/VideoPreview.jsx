import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

function shouldSkipAutoplay() {
  try {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saveData = navigator.connection && navigator.connection.saveData;
    return reduce || Boolean(saveData);
  } catch {
    return false;
  }
}

// Muted looping preview: loads and plays only while visible; poster only when the
// visitor prefers reduced motion or data saving.
export default function VideoPreview({ video, name, onOpen }) {
  const { t } = useTranslation();
  const ref = useRef(null);
  const [still] = useState(shouldSkipAutoplay);

  useEffect(() => {
    const el = ref.current;
    if (!el || still || typeof IntersectionObserver === 'undefined') return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [still]);

  return (
    <div className="mb-4">
      <div className="overflow-hidden rounded-lg border border-line bg-bg">
      <video
        ref={ref}
        className="block aspect-video w-full object-cover"
        src={video.loop}
        poster={video.poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={t('projects.video.preview', { name })}
      />
      </div>
      <button type="button" onClick={onOpen} className="btn mt-2 w-full justify-center px-3 py-1.5 text-xs">
        ▶ {t('projects.video.watch')}
      </button>
    </div>
  );
}
