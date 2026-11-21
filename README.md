# Portfolio — Antonio Valdez Aguayo

Personal portfolio of a Full-Stack developer (Python, FastAPI, Django, React, Angular). Single page, dark by default with a light toggle, available in Spanish and English.

> Sitio personal de Antonio Valdez Aguayo, en español e inglés. Contenido en `src/languages/` y datos en `src/data/profile.js`.

## Stack

React 18 · Vite 5 · Tailwind CSS 3 · i18next (with browser language detection). No router, no UI kit, no trackers, no third-party requests.

## Run it

Requires Node.js 18+.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the build locally
npm run lint
```

## Structure

```
src/
  components/   one file per section (Hero, About, Experience, Stack, Projects, Education, Contact)
  data/         profile.js — links, years of experience, stack, projects (non-translated facts)
  languages/    en.json, es.json — all visible prose; i18n.js — setup
  index.css     theme tokens (CSS variables) and small component classes
openspec/       design history: proposals, decisions and specs for each change
```

## Editing content

- Prose: edit `src/languages/en.json` and `src/languages/es.json`; keep both files with the same keys.
- Links, projects, stack and years: edit `src/data/profile.js`. Only link public repositories.
- Colors: CSS variables in `src/index.css` (`dark` and `light`).
- E-mail button: `links.email` in `src/data/profile.js` (empty hides it).

## Project videos

Each private project card can show a muted looping preview and a "watch with sound" player. Files live in `public/videos/` and are self-hosted (no YouTube or other third parties):

- `<key>-loop.mp4`: muted preview, 1280x720, H.264, no audio.
- `<key>-full.mp4`: full version with music and effects.
- `<key>-poster.jpg`: still frame shown before playing and when the visitor prefers reduced motion.

To add or replace one, re-encode it and point the project's `video` field in `src/data/profile.js` at the key:

```bash
ffmpeg -i source.mp4 -an -vf scale=1280:720 -c:v libx264 -preset slow -crf 28 -pix_fmt yuv420p -movflags +faststart public/videos/<key>-loop.mp4
ffmpeg -i source-with-audio.mp4 -vf scale=1280:720 -c:v libx264 -preset slow -crf 28 -pix_fmt yuv420p -c:a aac -b:a 96k -movflags +faststart public/videos/<key>-full.mp4
```

Videos use fictitious data and no company material.

## Contact

[tonypeanut93@gmail.com](mailto:tonypeanut93@gmail.com) · [LinkedIn](https://www.linkedin.com/in/antonio-valdez-84b4549b) · [GitHub](https://github.com/tonypeanut)

## Deploy

The build is static (`dist/`) and uses no client-side routes, so any static host works (GitHub Pages, Netlify, Vercel, Cloudflare Pages). Target: Cloudflare (Workers with static assets): build command `npm run build`, deploy command `npx wrangler deploy`; `wrangler.jsonc` serves `dist/`. Videos are a few MB each, below the 25 MiB per-file limit.

## Method

Changes are specified with [OpenSpec](https://github.com/Fission-AI/OpenSpec) (`openspec/`): each change records the proposal, decisions with the alternatives that were discarded, and its tasks.
