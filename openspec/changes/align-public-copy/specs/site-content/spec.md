## ADDED Requirements

### Requirement: Headline matches the CV
The hero role SHALL name the same areas as the CV title (Full-Stack, Python, Angular, DevOps), and where Angular and React are listed together in the hero or the page description, Angular SHALL come first.

#### Scenario: Read the hero
- **WHEN** a visitor opens the page in either language
- **THEN** the role names Python, Angular and DevOps

### Requirement: Discreet contact section
The contact section SHALL state how to reach the owner and SHALL NOT announce that the owner is open to or looking for a job.

#### Scenario: Read the contact section
- **WHEN** a visitor reads the contact section in either language
- **THEN** it gives contact channels and no availability statement
