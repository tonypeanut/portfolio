# project-docs Specification

## Purpose
TBD - created by archiving change redesign-portfolio. Update Purpose after archive.
## Requirements
### Requirement: Real repository README
`README.md` SHALL describe the project, stack, scripts, structure and how to edit content, with no template placeholders such as `tu-usuario`.

#### Scenario: No placeholders
- **WHEN** README.md is searched for "tu-usuario"
- **THEN** there are no matches

### Requirement: Short GitHub profile README
A profile README draft SHALL be short (about 40 lines at most), link only public repositories and the owner's LinkedIn, use the approved figures, and stay unpublished until the owner approves creating the public repo `tonypeanut/tonypeanut`.

#### Scenario: Not published without approval
- **WHEN** this change is archived
- **THEN** the draft exists in the change and no repository was created or pushed without explicit owner approval

### Requirement: Supported toolchain is documented
The README SHALL state the minimum Node.js version, and `package.json` SHALL declare it in `engines`.

#### Scenario: Read the README
- **WHEN** a contributor reads the Run it section
- **THEN** it names the Node.js version required by the build tool

### Requirement: Clean dependency audit
A dependency update SHALL leave `npm audit` reporting no vulnerabilities, or the remaining ones SHALL be listed with a reason in the change.

#### Scenario: Audit after update
- **WHEN** dependencies are updated
- **THEN** `npm audit` is run and its result is recorded in the change

