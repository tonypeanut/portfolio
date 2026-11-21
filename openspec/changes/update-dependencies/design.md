## Decisions

- **Upgrade Vite instead of ignoring the advisory.** The esbuild issue only affects the local dev server, but keeping an audit with known findings hides new ones. Vite 8 needed no config change in this project (one plugin, no custom build options).
- **Pin the Node floor with `engines`.** Makes the requirement explicit locally and in CI.
- **No `overrides` for the old packages.** Overrides would keep an outdated Vite and silently break on later updates.

## Risks

- Vite 8 is a new major version. Mitigation: lint, build and output check; the site has no custom plugins. Rolling back means restoring `package.json` and `package-lock.json` from the previous commit.
