# site-experience Specification

## Purpose
TBD - created by archiving change redesign-portfolio. Update Purpose after archive.
## Requirements
### Requirement: Single page with section navigation
The site SHALL be one page with anchored sections (About, Experience, Stack, Projects, Education, Contact) and a sticky header linking to them.

#### Scenario: Navigate
- **WHEN** the visitor clicks a header link
- **THEN** the page scrolls to that section

### Requirement: Dark by default with light toggle
The site SHALL render dark on first visit and offer a light theme toggle whose choice persists across visits when storage is available.

#### Scenario: Toggle persists
- **WHEN** the visitor switches to light and reloads
- **THEN** the light theme is applied

### Requirement: Language switch
The site SHALL offer Spanish and English, default to the browser language (fallback English), and remember the choice.

#### Scenario: Switch language
- **WHEN** the visitor selects Spanish
- **THEN** all visible text and the `html lang` attribute update

### Requirement: Responsive and accessible
The layout SHALL work from 360 px width, use semantic landmarks, visible focus states, sufficient contrast and respect `prefers-reduced-motion`.

#### Scenario: Mobile
- **WHEN** the viewport is 360 px wide
- **THEN** there is no horizontal scroll

### Requirement: No external services
The site SHALL NOT load third-party scripts, trackers, fonts or form backends.

#### Scenario: Network
- **WHEN** the page loads
- **THEN** every request goes to the same origin

### Requirement: Builds cleanly
`npm run dev` and `npm run build` SHALL succeed and `npm run lint` SHALL pass.

#### Scenario: Build
- **WHEN** `npm run build` runs
- **THEN** it exits 0 and emits `dist/`

