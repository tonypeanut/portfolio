## Decisions

- **Self-hosted files, no YouTube/Vimeo.** The site promises no third-party requests (`site-experience`). Embeds would break it and add trackers. Cost: the host serves the bytes; at 720p each loop is a few MB.
- **Two encodes per video.** `*-loop.mp4` (muted, for the card) and `*-full.mp4` (with the music and effects, for the modal). Autoplay with sound is blocked by browsers, so sound is opt-in through a button. Alternative discarded: one file with an unmute toggle, because every card would download the heavier audio file.
- **720p, CRF 28, `+faststart`.** Cards are small; the modal is the largest view. 1080p roughly doubles the size for no visible gain at page width. Alternative kept open: add WebM/VP9 if a host charges for bandwidth.
- **Play only when visible.** `IntersectionObserver` plays the loop when about 40 % of the card is visible and pauses it otherwise; `preload="none"` plus a poster avoids downloading before the visitor scrolls there.
- **Respect the visitor.** With `prefers-reduced-motion` or the Save-Data hint the card shows only the poster and a play button. Video elements have `playsinline`, `muted`, and the modal has a `<video controls>` so keyboard and screen-reader users can operate it; Escape and the close button dismiss it, focus returns to the trigger.
- **Captions.** The videos carry their own on-screen text (Spanish). The modal shows the localized project description next to the player; no separate subtitle track in this change.
- **Content limits.** Videos use fictitious data and no company material. They avoid usage figures (owner decision 2026-11-18): they say benefits, not counts. The mlm desktop view is a composition of the real web UI inside a window frame, not a capture of the real desktop window; the project description does not claim otherwise.

## Risks

- Videos reveal the interface and features of projects that are private today. The owner approved showing them.
- File size in git: about 3 × (loop + full + poster). If the repo grows uncomfortable, move them to the host's storage (R2/S3) and keep only URLs in `profile.js`.
