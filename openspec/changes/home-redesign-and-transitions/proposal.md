## Why

The current portfolio is a standard scrolling page — cards, banners, sections — that doesn't reflect the developer identity it's trying to communicate. The new design makes the interaction itself the statement: the whole page is a computer, and navigating it feels like using one.

## What Changes

- The laptop image stays as the visual centerpiece; the screen area becomes a live content display
- On load, a one-shot typewriter animation types "hi! my name is clara, and I am a developer" across the laptop screen
- Below the laptop, a rendered QWERTY keyboard replaces all scrolling content sections
- 11 keys are "hot" (highlighted, interactive), each mapped to a specific project, work experience, or leadership role via first-letter mnemonics
- Clicking a hot key transitions the laptop screen from the intro text to that item's content, displayed in a mac-style window (traffic light buttons, title bar)
- The navbar links ("projects", "work", "leadership", "extras") are repurposed: clicking one highlights all hot keys in that category rather than scrolling to a section
- The work banner sections, negative-margin layout hacks, scrolling experience cards, and orphaned notion image are all removed
- Header and footer are unchanged

## Capabilities

### New Capabilities
- `typewriter-screen`: One-shot typewriter animation displaying the intro text on the laptop screen area on page load
- `keyboard-navigation`: Rendered QWERTY keyboard with 11 hot keys mapped to content items via first-letter mnemonics; decorative keys are styled but inert
- `screen-content-display`: Clicking a hot key transitions the laptop screen to display that item's content in a mac-style window chrome
- `navbar-category-highlight`: Navbar category links highlight all hot keys belonging to that category on click

### Modified Capabilities
<!-- none — prior specs (hero-section, project-cards, scroll-animations) are superseded and will be replaced -->

## Hot Key Map

| Key | Item | Category |
|-----|------|----------|
| T | Ticket to Ride | Projects |
| B | A Brighter Future | Projects |
| O | My first portfolio ("old") | Projects |
| P | This portfolio (portfolio_two) | Projects |
| D | Data Analytics Intern (Scoular) | Work |
| N | Design Studio Intern (NSAA) | Work |
| I | Innovation Processes TA | Work |
| S | Student Advisory Board President | Leadership |
| M | SALT Ministry Student Leader | Leadership |
| K | Kauffman Residents VP | Leadership |
| H | NHRI Leadership Mentor | Leadership |

## Impact

- `src/home/home.jsx` — near-complete rewrite; laptop image + screen overlay + keyboard component
- `src/home/home.css` — remove all banner/negative-margin rules; add keyboard and screen layout
- `src/home/components/experiences/` — existing Experience cards no longer used as scroll sections; content data extracted and reused in screen display
- `src/components/navBar.jsx` — add category-highlight behavior (no visual change)
- New component: `src/home/components/Keyboard.jsx`
- New component: `src/home/components/MacScreen.jsx`
- No new npm dependencies required
