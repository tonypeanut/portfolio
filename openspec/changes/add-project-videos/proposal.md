## Why

The three flagship private projects (media-library-manager, duplicate-audio-desktop, dev-dock) appear in "Also building" as text only. A short product video per project shows what each one does and what problem it solves far better than a sentence, and it does not require publishing the private code. The videos were produced with the owner's `video` skill (Manim + Motion Canvas + real captures of each app with fictitious data) and reviewed by the owner.

## What Changes

- Add a muted, looping preview video to each private-project card, with a poster, that plays only while visible.
- Add a "Watch with sound" button that opens a modal player with the longer version that includes music and sound effects.
- Self-host web-optimised files in `public/videos/` (H.264, 1280x720, `faststart`), 3 videos × (loop + full + poster).
- Rewrite the `media` description: the project is now a library manager (catalog, MyAnimeList sync, series tracking, web and desktop views), not a size analyzer; size analysis lives in the separate RatioManager project.
- Add `video` field to `wip` items in `src/data/profile.js` and the UI strings in `en.json` and `es.json`.
- README: document how to add or replace videos and how to deploy.

## Capabilities

### New Capabilities
<!-- none -->

### Modified Capabilities
- `site-experience`: self-hosted video previews with reduced-motion and data-saving behavior, accessible modal player.
- `site-content`: project video content rules (fictitious data only, no usage figures, no company material).

## Impact

- Code: `src/components/Projects.jsx`, new `src/components/VideoPreview.jsx` and `VideoModal.jsx`, `src/data/profile.js`, `src/languages/*.json`, `src/index.css`, `README.md`.
- Assets: about `public/videos/` (size reported in design.md).
- No new dependencies; no third-party requests.
- Not included: deployment (documented in README, done by the owner) and publishing the private repositories.
