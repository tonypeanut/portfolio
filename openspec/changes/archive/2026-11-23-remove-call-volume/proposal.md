## Why

The Pyansa experience bullet cites "about 160,000 calls per week from 6 internal apps". It is an internal usage figure of the employer, it says little about the owner's work, and the owner already removed it from the CV. The `site-content` spec also uses it as its example of acceptable wording.

## What Changes

- Reword the integration-service bullet in `en.json` and `es.json` without the call volume (connectors to 6+ ERPs unified into one model, consumed by the internal apps).
- Change the `site-content` "Work confidentiality" requirement so it no longer offers a usage figure as an example and states that usage volumes are not published.

## Capabilities

### New Capabilities
<!-- none -->

### Modified Capabilities
- `site-content`: Work confidentiality requirement.

## Impact

- Code: `src/languages/en.json`, `src/languages/es.json` (`experience.items.pyansa.bullets[0]`).
- No layout or dependency changes. Production updates on merge to `main`.
