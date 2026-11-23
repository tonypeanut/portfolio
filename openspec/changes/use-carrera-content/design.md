## Decisions

1. **One generated JSON, read at build time.** `carrera.json` is imported by Vite (no fetch, no runtime request). Language-specific blocks live under `en` and `es`; language-neutral data (years, stack, project tech) at the top level. Rejected: writing into the i18n files in place (the generator would have to merge into hand-written prose).
2. **Thin helper.** `src/data/carrera.js` exports the neutral data and a `useCarrera()` hook that returns the block for `i18n.resolvedLanguage` (falls back to English).
3. **i18n keeps UI and prose.** Section titles, buttons, hero, about and contact stay in `en.json`/`es.json`; facts that also appear in the CV come from `carrera.json`.
4. **Video files stay in `profile.js`**, keyed by project id, because they are site assets, not career facts.

## Risks

- Someone edits `carrera.json` by hand: the skill's `revisar` reports it as stale, and the README says to regenerate.
