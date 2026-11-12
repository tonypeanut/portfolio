## Why

The personal portfolio was built in early 2025 and no longer reflects the owner's profile: it shows retired course exercises (now private on GitHub), has five colour themes and modal-heavy navigation, and nothing about the current Full-Stack Python role. Its README is a generic template (`git clone .../tu-usuario/portafolio.git`). The GitHub profile also has no README. Recruiters are asked for a GitHub link, so both must read well now.

## What Changes

- Rebuild the site as a lean single-page, dark-by-default portfolio (Spanish + English) with new, accurate content: profile, experience, stack with honest years, selected public projects, education, contact.
- Remove the router, modals, five-theme system, MUI/Emotion, daisyUI, EmailJS/nodemailer form and the ~20 MB of screenshots of retired projects.
- Second content pass (vault review, 2026-11-12): richer Pyansa bullets (CFDI details, SSO, production cutovers, legacy PHP modernization), a Leadership & method section (technical direction of external developers, manufacturing team supervision, OpenSpec), an "Also building" group of private projects shown without links, and extra education items (Google Data Analytics, 2021 paper).
- Rewrite `README.md` with a real description, scripts and structure.
- Add a short GitHub profile README, drafted in this change (`profile-readme.md`) for the new public repo `tonypeanut/tonypeanut`. It is NOT published until the owner approves.
- Initialise OpenSpec in this repo.
- **BREAKING**: routes `/proyectos` and `/cursos`, and the theme switcher, disappear.

## Capabilities

### New Capabilities
- `site-content`: what the portfolio says (profile facts, approved figures, confidentiality limits, bilingual text).
- `site-experience`: how it looks and behaves (single page, dark default with light toggle, language switch, responsive, accessible, no external services).
- `project-docs`: README of the portfolio and the draft profile README.

### Modified Capabilities
<!-- none: the repo had no specs -->

## Impact

- Code: all of `src/`, `index.html`, `tailwind.config.cjs`, `vite.config.mjs`, `package.json`, `public/`, `README.md`.
- Dependencies removed: `@mui/material`, `@emotion/*`, `daisyui`, `emailjs-com`, `nodemailer`, `dotenv`, `clsx`, `js-file-download`, `react-router-dom`, `rollup-plugin-copy`.
- `.env` (EmailJS keys, git-ignored) is no longer used.
- No deployment is created; the previous Vercel URLs return 404 and are not linked.
