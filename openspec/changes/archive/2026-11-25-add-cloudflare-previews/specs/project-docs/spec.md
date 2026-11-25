## ADDED Requirements

### Requirement: Documented deploy paths
The README SHALL describe how `main` and the other branches are deployed, and `wrangler.jsonc` SHALL contain the configuration both commands require.

#### Scenario: Branch build
- **WHEN** a branch other than `main` is pushed
- **THEN** `npx wrangler preview` finds its `previews` block and the Cloudflare check passes

#### Scenario: Production build
- **WHEN** `main` is updated
- **THEN** `npx wrangler deploy` publishes `dist/` as before
