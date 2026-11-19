// Non-translatable facts. Prose lives in src/languages/{es,en}.json.
// Only public repositories are linked (verified with `gh` on 2026-11-12).

export const links = {
  github: 'https://github.com/tonypeanut',
  linkedin: 'https://www.linkedin.com/in/antonio-valdez-84b4549b',
  // Leave empty to hide the e-mail button; the owner decides whether to publish an address.
  email: 'tonypeanut93@gmail.com',
};

// Approved figures. Do not raise these without the owner's confirmation.
export const years = [
  { name: 'Python', years: 3 },
  { name: 'React', years: 1 },
  { name: 'TypeScript', years: 1 },
];

export const stack = [
  { id: 'backend', items: ['Python', 'FastAPI', 'Django / DRF', 'Celery', 'Flask', 'REST APIs'] },
  { id: 'frontend', items: ['React', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS'] },
  { id: 'data', items: ['MySQL / MariaDB', 'SQL', 'SQLAlchemy'] },
  { id: 'cloud', items: ['GCP', 'Docker', 'GitLab CI/CD', 'nginx'] },
  { id: 'quality', items: ['pytest', 'TestNG', 'REST Assured', 'Allure'] },
  { id: 'practices', items: ['OpenSpec', 'Claude Code', 'Scrum'] },
];

export const projects = [
  {
    id: 'cfdi',
    name: 'cfdi-xml-viewer',
    repo: 'https://github.com/tonypeanut/cfdi-xml-viewer',
    tech: ['Angular', 'TypeScript', 'Node.js', 'Express'],
  },
  {
    id: 'viajes',
    name: 'viajes-dashboard',
    repo: 'https://github.com/tonypeanut/viajes-dashboard',
    tech: ['Angular', 'TypeScript', 'CSV'],
  },
  {
    id: 'notes',
    name: 'fullstack-notes-full',
    repo: 'https://github.com/tonypeanut/fullstack-notes-full',
    tech: ['React', 'Flask', 'SQLAlchemy'],
  },
  {
    id: 'qa',
    name: 'challengeBenchQA',
    repo: 'https://github.com/tonypeanut/challengeBenchQA',
    tech: ['Java', 'REST Assured', 'TestNG', 'Allure'],
  },
];

// Self-hosted videos live in public/videos/: <key>-loop.mp4 (muted preview), <key>-full.mp4 (with sound), <key>-poster.jpg.
const videoFiles = (key) => ({
  loop: `/videos/${key}-loop.mp4`,
  full: `/videos/${key}-full.mp4`,
  poster: `/videos/${key}-poster.jpg`,
});

// Private projects: shown WITHOUT a link until the owner publishes them.
export const wip = [
  { id: 'media', name: 'media-library-manager', tech: ['Python', 'SQLite', 'FastAPI'], video: videoFiles('mlm') },
  { id: 'audio', name: 'duplicate-audio-desktop', tech: ['Rust', 'Tauri', 'Svelte'], video: videoFiles('dad') },
  { id: 'dock', name: 'dev-dock', tech: ['Python', 'FastAPI', 'WebSocket'], video: videoFiles('dock') },
];

export const leadershipIds = ['dev', 'plant', 'method'];
export const experienceIds = ['pyansa', 'a1qa', 'rice'];
export const educationIds = ['upsin', 'one', 'bedu', 'gda', 'english', 'paper'];
