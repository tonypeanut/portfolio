## Why

The last sentence of the About section ("...but I own the design and the review") reads as a defense against an accusation nobody made and frames AI as something that needs justifying. The owner prefers to state the method and the use of AI as one coherent working practice.

## What Changes

- Rewrite `about.p3` in `en.json` and `es.json`: describe the spec-first method (change and acceptance criteria defined before coding, decisions documented), then state that AI is part of the workflow and every change is reviewed before it ships.
- Add a content requirement so the About section states the method and AI use plainly, without defensive wording.

## Capabilities

### New Capabilities
<!-- none -->

### Modified Capabilities
- `site-content`: how the About section describes the working method and AI use.

## Impact

- Code: `src/languages/en.json`, `src/languages/es.json` (key `about.p3`).
- No layout, dependency or build changes. Production updates on merge to `main` (Cloudflare).
