## ADDED Requirements

### Requirement: Intro text types out on page load
On page load, the laptop screen area SHALL display the intro text — "hi! my name is clara, and I am a developer" — character by character, as if being typed in real time. The animation SHALL play once and stop at the completed text. It SHALL NOT loop or restart unless the page is refreshed.

#### Scenario: Text is empty at start
- **WHEN** the page first renders
- **THEN** the screen area shows no intro text and begins typing immediately

#### Scenario: Characters appear sequentially
- **WHEN** the typewriter animation is in progress
- **THEN** each character appears one at a time in order, with a consistent delay between characters (approximately 60–80ms per character)

#### Scenario: Animation completes and cursor blinks
- **WHEN** all characters have been typed
- **THEN** a blinking cursor (`|`) appears at the end of the text and continues blinking indefinitely

#### Scenario: Animation does not restart on re-render
- **WHEN** the component re-renders for any reason after the animation has completed
- **THEN** the completed text remains displayed without replaying the animation

### Requirement: Screen content area is overlaid on the laptop image
The intro text SHALL appear visually "inside" the laptop screen by rendering in a div precisely positioned over the screen region of the `smallComp.png` image. The laptop image itself is not modified.

#### Scenario: Text appears within screen bounds
- **WHEN** the page is rendered at standard desktop viewport widths (≥768px)
- **THEN** the intro text is visually contained within the laptop screen area and does not overflow onto the laptop bezel or body
