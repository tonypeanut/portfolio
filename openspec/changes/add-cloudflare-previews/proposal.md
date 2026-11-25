## Why

Every pull request shows a failed Cloudflare check. The site builds, but Workers Builds then runs `npx wrangler preview` on non-production branches, and that command stops because `wrangler.jsonc` has no `previews` block. Production is not affected. A check that always fails hides real failures.

## What Changes

- Add an empty `previews` block to `wrangler.jsonc`.
- Document in the README that branches deploy a preview and `main` deploys production.

## Capabilities

### Modified Capabilities
- `project-docs`: the README describes both deploy paths, and the Wrangler configuration supports both.

## Impact

- `wrangler.jsonc`, `README.md`. No source code or content changes.
- The failing Netlify checks come from the old Netlify site, still connected to the repository. They are out of scope.
