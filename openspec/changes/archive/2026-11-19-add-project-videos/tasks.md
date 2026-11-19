## 1. Assets
- [x] 1.1 Re-encode loop, full and poster files for dock, dad and mlm into `public/videos/`
- [x] 1.2 Verify sizes and playback

## 2. Implementation
- [x] 2.1 `VideoPreview` component (muted loop, visibility play/pause, reduced-motion and Save-Data fallback)
- [x] 2.2 `VideoModal` component (dialog, focus management, Escape, controls)
- [x] 2.3 Wire into `Projects.jsx` and `profile.js` (`video` field on `wip` items)
- [x] 2.4 Strings in `en.json` and `es.json`; update the `media` description
- [x] 2.5 Styles in `index.css`

## 3. Verification and docs
- [x] 3.1 `npm run lint` and `npm run build` pass
- [x] 3.2 Check in the browser: desktop and 360 px, dark and light, both languages, no third-party requests
- [x] 3.3 README: add/replace videos and deployment instructions
- [x] 3.4 Archive the change after the owner approves
