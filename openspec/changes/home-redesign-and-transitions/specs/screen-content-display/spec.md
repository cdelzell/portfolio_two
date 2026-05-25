## ADDED Requirements

### Requirement: Clicking a hot key replaces the screen with that item's content
When a visitor clicks a hot key, the laptop screen area SHALL transition from its current content (intro text or a previous item) to a mac-style window displaying the content for the selected item. The content SHALL include the item's name, time period, blurb, and image.

#### Scenario: Screen changes on key click
- **WHEN** a hot key is clicked
- **THEN** the laptop screen displays the content for that key's item within 300ms

#### Scenario: Content matches the key's item
- **WHEN** key T is clicked
- **THEN** the screen shows the Ticket to Ride content (name, time, blurb, image)

#### Scenario: All 11 hot keys show their respective content
- **WHEN** each of the 11 hot keys is clicked in turn
- **THEN** the screen displays the correct item for each key

### Requirement: Screen content is displayed in a mac-style window chrome
The content area on the laptop screen SHALL be styled to resemble a macOS application window, including a title bar with three colored circles (red, yellow, green) and the item name as the window title. The circles are decorative only — clicking them has no effect.

#### Scenario: Mac chrome is visible on content display
- **WHEN** a hot key is clicked and content loads
- **THEN** the screen shows a title bar with three colored dots and the item name

#### Scenario: Traffic light dots are decorative
- **WHEN** a visitor clicks the red, yellow, or green dots
- **THEN** nothing happens — the window does not close, minimize, or resize

### Requirement: Screen returns to intro state when active key is clicked again
If a visitor clicks the currently active hot key a second time, the laptop screen SHALL return to the intro/typewriter completed state (showing the full typed intro text with blinking cursor).

#### Scenario: Re-clicking active key clears content
- **WHEN** the currently active hot key is clicked
- **THEN** the screen transitions back to the intro text and no key appears active
