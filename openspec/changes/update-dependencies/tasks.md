## 1. Dependencies
- [x] 1.1 `npm audit fix` (22 -> 6)
- [x] 1.2 Upgrade `vite` and `@vitejs/plugin-react`, then `npm audit fix` (-> 0)
- [x] 1.3 Add `engines.node` and update README

## 2. Verification
- [x] 2.1 `npm audit` and `npm audit --omit=dev`: 0 vulnerabilities
- [x] 2.2 `npm run lint` and `npm run build` pass, 9 files in `dist/videos`
- [ ] 2.3 Visual check of the new build with the preview pane visible (owner or next session)
- [ ] 2.4 Archive the change after merge and a successful Cloudflare deploy
