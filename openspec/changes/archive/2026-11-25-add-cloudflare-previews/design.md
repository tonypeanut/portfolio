## Decisions

- **Empty `previews` block.** The site is static assets only: no variables, secrets or bindings to separate from production. Cloudflare documents the empty block for this case.
- **Keep previews instead of disabling branch builds.** They allow checking a change before merging.
- **Discarded: `npx wrangler versions upload` as the branch command.** It lives in the Cloudflare dashboard, outside the repository and its history.

## Risks

- `wrangler preview` is an open beta and Wrangler is not pinned (`npx` installs the latest), so the command may change. Production uses `wrangler deploy`, a separate command. Rolling back means removing the block.
- Previews may be reachable by URL before merge. Branches are already public in the repository, so nothing new is exposed.
