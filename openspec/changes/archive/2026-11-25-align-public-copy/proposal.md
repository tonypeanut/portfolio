## Why

A review of the published site found copy that does not match the owner's current positioning:
- The contact section announces that the owner is open to roles, while the job search is meant to be discreet.
- The hero names only Python and lists React before Angular; the CV says Full-Stack, Python, Angular and DevOps, and Angular has more years.
- In Spanish, the A1QA position is shown in English.
- The A1QA period lost ", remote" when the content moved to `carrera.json`: an unquoted comma in the YAML source truncated it.

## What Changes

- Contact text: only how to reach the owner.
- Hero role "Full-Stack · Python · Angular · DevOps"; Angular before React in the tagline, the meta description and the README.
- Regenerate `carrera.json`: Spanish A1QA position and full period in both languages.

## Capabilities

### Modified Capabilities
- `site-content`: the headline follows the CV title and the site does not announce a job search.

## Impact

- `src/languages/en.json`, `src/languages/es.json`, `src/data/carrera.json` (generated), `index.html`, `README.md`. No component changes.
