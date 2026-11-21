## ADDED Requirements

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
