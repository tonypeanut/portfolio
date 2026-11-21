## Why

The first Cloudflare build reported 22 vulnerabilities (1 low, 7 moderate, 14 high) from `npm audit`. All were in build and development tooling (Vite, esbuild, Rollup, PostCSS, Tailwind's toolchain); the shipped site is static and `npm audit --omit=dev` reported one moderate. They should still be closed so the repository and its CI stay clean.

## What Changes

- Run `npm audit fix` (lockfile-only, non-breaking): 22 -> 6.
- Upgrade `vite` to 8.x and `@vitejs/plugin-react` to 6.x to remove the esbuild dev-server advisory; then `npm audit fix` for the rest: 0 vulnerabilities, with and without dev dependencies.
- **BREAKING (tooling only):** Vite 8 requires Node.js 20.19+ or 22.12+. Add `engines` to `package.json` and update the README. Cloudflare's build image uses Node 24, so deploys are unaffected.

## Capabilities

### Modified Capabilities
- `project-docs`: README states the supported Node version and the dependency audit result is part of the definition of done for dependency changes.

## Impact

- `package.json`, `package-lock.json`, `README.md`. No source code changes; `vite.config.mjs` unchanged.
- Verified: `npm run lint` and `npm run build` pass; `dist/` contents unchanged (9 video files present).
- Not verified: visual check of video autoplay with the new build, because the preview pane was hidden during testing (the previous build was verified earlier).
