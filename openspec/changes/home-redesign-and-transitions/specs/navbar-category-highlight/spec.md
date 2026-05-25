## ADDED Requirements

### Requirement: Navbar category links highlight their key group on click
Clicking a navbar link ("projects", "work", "leadership") SHALL highlight all hot keys belonging to that category on the keyboard, drawing attention to the relevant interactive keys. This replaces the previous scroll-to-section behavior.

#### Scenario: "projects" highlights project keys
- **WHEN** the visitor clicks "projects" in the navbar
- **THEN** keys T, B, O, and P are highlighted in a distinct category-highlight style

#### Scenario: "work" highlights work keys
- **WHEN** the visitor clicks "work" in the navbar
- **THEN** keys D, N, and I are highlighted

#### Scenario: "leadership" highlights leadership keys
- **WHEN** the visitor clicks "leadership" in the navbar
- **THEN** keys S, M, K, and H are highlighted

### Requirement: Category highlight clears when a hot key is clicked
When a visitor clicks a highlighted hot key after activating a category highlight, the category highlight SHALL clear and only the clicked key's active state remains.

#### Scenario: Category highlight clears on key selection
- **WHEN** a category is highlighted via the navbar AND the visitor then clicks one of the highlighted keys
- **THEN** the category highlight disappears and only the selected key shows as active

### Requirement: Category highlight clears when another nav link is clicked
Clicking a different navbar category SHALL replace the current highlight with the new category's keys.

#### Scenario: New nav click replaces previous highlight
- **WHEN** "projects" is highlighted and the visitor clicks "work"
- **THEN** T, B, O, P lose their category highlight and D, N, I become highlighted

### Requirement: Navbar visual appearance is unchanged
The navbar SHALL look identical to its current state. No new visual elements are added to the navbar itself — only the behavior of the links changes.

#### Scenario: Navbar renders identically to before
- **WHEN** the page loads
- **THEN** the navbar shows "clara delzell" on the left and "projects work leadership extras" on the right, with the same font, size, and spacing as before
