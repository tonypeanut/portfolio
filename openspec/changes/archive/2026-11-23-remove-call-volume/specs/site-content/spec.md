## MODIFIED Requirements

### Requirement: Work confidentiality
The site MUST NOT link to or name private employer repositories, client names or internal system names, and MUST describe work only in general impact terms, without internal usage volumes or financial figures (for example an integration service that unifies several ERPs into one model).

#### Scenario: No employer code links
- **WHEN** all outbound links are listed
- **THEN** each points only to the owner's LinkedIn, the owner's GitHub profile or public repositories

#### Scenario: No internal volumes
- **WHEN** the experience text and translations are searched for call counts or monetary amounts of the employer
- **THEN** none are found
