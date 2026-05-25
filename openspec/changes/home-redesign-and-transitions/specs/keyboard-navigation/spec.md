## ADDED Requirements

### Requirement: QWERTY keyboard is rendered below the laptop image
The page SHALL render a full QWERTY keyboard layout as an interactive HTML component below the laptop image. The keyboard SHALL include all standard letter keys (A–Z) arranged in three rows matching a standard QWERTY layout.

#### Scenario: Keyboard is visible on page load
- **WHEN** the page loads
- **THEN** the keyboard is rendered and visible below the laptop image without requiring any scrolling on a standard desktop viewport

#### Scenario: Keyboard rows match QWERTY layout
- **WHEN** the keyboard renders
- **THEN** row 1 contains Q W E R T Y U I O P, row 2 contains A S D F G H J K L, and row 3 contains Z X C V B N M

### Requirement: Hot keys are visually distinct from dead keys
The 11 hot keys (T, B, O, P, D, N, I, S, M, K, H) SHALL be visually differentiated from the remaining decorative keys — through color, glow, border, or weight — so a visitor can immediately identify which keys are interactive.

#### Scenario: Hot keys are identifiable at a glance
- **WHEN** the keyboard renders in its default state
- **THEN** a visitor can distinguish hot keys from dead keys without hovering or clicking

#### Scenario: Dead keys are not interactive
- **WHEN** a visitor clicks or focuses a dead key
- **THEN** nothing happens and no content changes

### Requirement: Hot keys have hover feedback
Each hot key SHALL provide visual feedback when the pointer hovers over it (e.g. a lift effect, brighter glow, or scale transform).

#### Scenario: Hover state is visible
- **WHEN** the pointer enters a hot key
- **THEN** the key visually responds (changes appearance) within 150ms

#### Scenario: Hover state clears on pointer exit
- **WHEN** the pointer leaves a hot key
- **THEN** the key returns to its default hot-key appearance

### Requirement: Active key is visually marked
When a hot key has been clicked and its content is displayed on screen, that key SHALL appear in a distinct "active" or "pressed" state.

#### Scenario: Clicked key shows active state
- **WHEN** a hot key is clicked
- **THEN** that key's appearance changes to indicate it is the currently selected key

#### Scenario: Previous active key deactivates on new selection
- **WHEN** a different hot key is clicked while one is already active
- **THEN** the previously active key returns to its default hot-key appearance and the new key becomes active
