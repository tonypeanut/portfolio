## ADDED Requirements

### Requirement: Self-hosted project videos
Project cards MAY include a muted looping preview video served from the same origin; that preview SHALL play only while visible, SHALL NOT download before it is near the viewport, and SHALL show only its poster when the visitor prefers reduced motion or has enabled data saving.

#### Scenario: Scroll to a card
- **WHEN** a card with a video enters the viewport
- **THEN** its loop plays muted, and pauses when it leaves

#### Scenario: Reduced motion
- **WHEN** the visitor prefers reduced motion
- **THEN** the card shows the poster and a play control instead of autoplaying

### Requirement: Opt-in sound player
A project video MAY offer a longer version with sound. It SHALL open only from an explicit button, in a modal dialog that is keyboard operable, closes with Escape and returns focus to the button.

#### Scenario: Watch with sound
- **WHEN** the visitor activates "Watch with sound"
- **THEN** a dialog opens with a video player with controls, and Escape closes it
