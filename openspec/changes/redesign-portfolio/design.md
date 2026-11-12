## Context

React 18 + Vite + Tailwind + i18next. Previous version: multi-route app, modals, 5 themes, MUI, 1,300-line JSON per language, contact form via EmailJS. The owner wants a modern dark minimal "dev" look, ES + EN, a direct professional tone, no deployment yet, and to keep React + Vite in JavaScript.

## Goals / Non-Goals

- Goals: accurate content, small and fast build, readable on mobile, easy to update (facts in one data module, prose in two JSON files).
- Non-Goals: TypeScript migration, deployment, analytics, blog, contact form backend, CV download.

## Decisions

1. **Single page, no router.** Alternative: keep react-router with `/proyectos`. Rejected: four projects fit one scroll; fewer files and no SPA-redirect hosting requirement.
2. **Keep JavaScript.** Alternative: migrate to TypeScript to show the skill. Rejected by the owner for now; TypeScript is shown through the linked `viajes-dashboard`.
3. **Tailwind + CSS variables; drop daisyUI and MUI.** Colours live in `:root` and `[data-theme=light]`, Tailwind maps to them. Alternative: keep daisyUI themes. Rejected: unused weight, and the source of the dated look.
4. **Dark by default, light toggle** persisted in `localStorage` (wrapped in try/catch). Alternative: follow `prefers-color-scheme` only. Rejected: the owner asked for the dark look; the toggle keeps accessibility.
5. **Content split.** Non-translatable facts (project names, URLs, tech chips, years) in `src/data/profile.js`; prose in `src/languages/{es,en}.json`. Alternative: everything in JSON. Rejected: URLs would be duplicated in two files.
6. **Language**: detect the browser language, fall back to English, remember the choice. The old code forced `lng: 'en'`, defeating detection.
7. **Contact via links** (LinkedIn, GitHub, optional email constant empty by default). Alternative: keep the EmailJS form. Rejected: it needs secrets and a third party; the owner decides whether to expose an address.
8. **Only public repos are linked.** States verified with `gh` on 2026-11-12. Private or unpublished projects (`media-library-manager`, `duplicate-audio-desktop`, `dev-dock`, `ratio-manager`) are not linked. The previous Vercel demo URLs return 404 and are not linked either.
9. **Confidentiality.** Work is described at the impact level used in the CV: company, role, general results. No employer code, repo names, client names or internal system names.

10. **Leadership claims limited to what the vault backs.** Sources: `Projects/CV/CV.md`, the achievements inventory and the CV already sent to employers. The site says Antonio directs "external developers" (requirements, acceptance criteria, verification) without a headcount, because the vault lists "what can be said publicly" as an open question and LinkedIn was deliberately kept sober. Alternative: publish "4-5 external developers" and "68 % of releases". Deferred until the owner confirms. Incident/security findings, client or ERP names and bus-factor remarks are never shown.
11. **Private projects shown unlinked.** `media-library-manager` (MIT, private), `duplicate-audio-desktop` (history rewrite pending) and `dev-dock` appear under "Also building" with a "Private" tag and no link, so the site reflects recent work without exposing code. `RatioManager` (purpose undocumented), `image-classifier` (1 commit), `Downloader` (needs hygiene review) and `propeller-management` (work-related) are omitted.

12. **Owner decisions on open points.** No headcount or release percentage is published (decision 10 stands). A dedicated public contact e-mail is shown as a `mailto:` link (replaces decision 7's "empty by default"; still no form or third party). Private project cards stay visible, unlinked. "230 tests" stays.

## Risks / Trade-offs

- Years of experience are the approved figures only (Python 3, React 1, TypeScript 1); "5+ years" never appears. Mitigation: a spec scenario and a grep check in tasks.
- Removing screenshots makes project cards text-only; acceptable until demos exist.
- Retired content stays in git history; only the working tree is cleaned.
