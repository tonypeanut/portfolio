# site-content Specification

## Purpose
TBD - created by archiving change redesign-portfolio. Update Purpose after archive.
## Requirements
### Requirement: Accurate professional profile
The site SHALL present the owner (Antonio Valdez Aguayo) as a Full-Stack Python developer at Pyansa since June 2025, previously functional QA at A1QA and manufacturing/quality engineering, with a Mechatronics Engineering degree (UPSIN, 2011-2014), Oracle Next Education (Back-end), BEDU AI/ML (2024) and English C1.

#### Scenario: Role shown
- **WHEN** a visitor opens the page
- **THEN** the hero and experience sections state the Full-Stack developer role at Pyansa from June 2025

### Requirement: Approved figures only
Years of experience SHALL be limited to Python 3, React 1 and TypeScript 1. The site MUST NOT contain "5+ years" or any larger figure for software experience.

#### Scenario: No inflated claims
- **WHEN** the text and translations are searched for "5+" years claims
- **THEN** none are found

### Requirement: Work confidentiality
The site MUST NOT link to or name private employer repositories, client names or internal system names, and MUST describe work only in general impact terms, without internal usage volumes or financial figures (for example an integration service that unifies several ERPs into one model).

#### Scenario: No employer code links
- **WHEN** all outbound links are listed
- **THEN** each points only to the owner's LinkedIn, the owner's GitHub profile or public repositories

#### Scenario: No internal volumes
- **WHEN** the experience text and translations are searched for call counts or monetary amounts of the employer
- **THEN** none are found

### Requirement: Verified project links
Every project card SHALL link only to a repository that was public when verified, and SHALL NOT link to demo URLs that do not respond.

#### Scenario: Private project absent
- **WHEN** the projects section is rendered
- **THEN** `media-library-manager`, `duplicate-audio-desktop`, `dev-dock` and `ratio-manager` are not linked

### Requirement: Backed leadership claims
Leadership statements SHALL be limited to what the owner's notes support (directing external developers without a stated headcount, supervising a molding team, quality system management) and MUST NOT include team sizes or release percentages until the owner confirms them as publishable.

#### Scenario: No headcount
- **WHEN** the leadership section is rendered
- **THEN** it mentions external developers without a number

### Requirement: Private projects unlinked
Projects whose repositories are private SHALL be shown only in a clearly labelled "private" group, without links.

#### Scenario: Private card
- **WHEN** a private project card is rendered
- **THEN** it carries a "Private" tag and has no anchor element

### Requirement: Bilingual text
All visible prose SHALL exist in Spanish and English with identical keys.

#### Scenario: Key parity
- **WHEN** the keys of `es.json` and `en.json` are compared
- **THEN** the sets are equal

### Requirement: Project video content limits
Project videos SHALL use fictitious data, SHALL NOT include company material or usage figures, and SHALL NOT claim features the project does not have.

#### Scenario: Review a video
- **WHEN** a video is added or replaced
- **THEN** it shows only fictitious data and describes benefits instead of counts

### Requirement: Working method and AI use statement
The About section SHALL describe the working method (specifying each change and its acceptance criteria before coding, and documenting decisions) and SHALL state that AI is part of the workflow and that every change is reviewed before it ships. It SHALL NOT use defensive or apologetic wording about AI use.

#### Scenario: Read the About section
- **WHEN** a visitor reads the About section in either language
- **THEN** the method and the use of AI appear as one working practice, with review stated as part of it

