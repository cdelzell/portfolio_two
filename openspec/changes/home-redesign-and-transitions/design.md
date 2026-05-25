## Context

The portfolio is a Vite + React SPA with plain CSS. The home page currently stacks sections using a broken negative-margin layout, with no animations. The redesign replaces the entire content area with a computer metaphor: a laptop image whose screen is an interactive display, and a rendered QWERTY keyboard as the navigation system. The existing `Experience` component data (name, blurb, details, time, image) is reused — only the presentation layer changes.

## Goals / Non-Goals

**Goals:**
- Laptop screen shows a one-shot typewriter animation on load
- Rendered QWERTY keyboard below the laptop with 11 highlighted hot keys
- Clicking a hot key transitions the screen to mac-style window content
- Navbar category links highlight the relevant key group
- Keep navbar and footer visually unchanged

**Non-Goals:**
- Mobile layout overhaul (keyboard interaction is inherently desktop-first)
- Routing or URL-based state for active key
- Adding new content (text, images) beyond what's already in the experience components
- Dark mode

## Decisions

**D1 — Screen overlay on the laptop image, not a CSS laptop frame**
The existing `smallComp.png` already looks exactly right. Rather than rebuilding a laptop in CSS/SVG, we position the screen content as an absolutely-positioned div overlaid precisely on the screen area of the image. The laptop image is the background; a `position: relative` wrapper + `position: absolute` content div creates the layering. The overlay coordinates (top/left/width/height as percentages) are tuned once to match the image.

*Risk*: if the image is ever swapped, the overlay coordinates need retuning. Acceptable — the image is a deliberate design asset.

**D2 — Typewriter animation via CSS + a small JS character-reveal loop**
A CSS-only typewriter (using `steps()` on `width`) works for single-line fixed text but breaks on multi-line. Since the intro spans two visual lines, a JS `setInterval` that appends characters to state one-by-one is cleaner. A blinking cursor (`|`) is appended and removed via a CSS animation after typing completes.

*Alternative considered*: a CSS animation with `@keyframes` and `steps()` — rejected because multi-line support requires knowing character count at compile time and breaks on resize.

**D3 — Keyboard rendered as a CSS grid of button elements**
The QWERTY layout is a fixed structure: 4 rows, known key counts per row. A `KEYBOARD_ROWS` constant defines row arrays; hot keys are a lookup map from letter → content item. Each key renders as a `<button>`. Hot keys get an `active` prop that applies highlight styling. Dead keys are `disabled`.

*Alternative considered*: an SVG keyboard — rejected because interactive hit targets and focus states are harder to manage than native buttons.

**D4 — Screen content stored in React state, not URL**
`activeKey` is a single string (`null` | letter) in `Home` component state. Null = typewriter view. A letter = mac window view for that item. No URL params — the portfolio is a single page and back-navigation to the typing animation isn't a use case worth the complexity.

**D5 — Mac window chrome is purely decorative CSS**
The mac-style title bar (traffic light dots + item name) is a styled `div`, not a functional window manager. The three dots are `background-color` circles; no close/minimize/maximize behavior is implemented. This is a visual metaphor, not an emulator.

**D6 — Navbar sends a `highlightCategory` event via a shared state prop**
`Home` holds `highlightedCategory` state (null | "projects" | "work" | "leadership"). Navbar receives a setter; `Keyboard` receives the current value and applies highlight styling to all keys in that category. Clicking a hot key clears the category highlight and sets `activeKey`.

## Risks / Trade-offs

- Overlay positioning is fragile to image aspect ratio changes → use `object-fit: contain` on the image and percentage-based overlay coordinates
- Typewriter animation fires on every mount — if the component remounts, the animation replays → acceptable for a portfolio; guard with a `useRef` played flag if it becomes an issue
- Desktop-first interaction (keyboard navigation) may feel broken on mobile → add a fallback card-list view for narrow viewports, or display a "best viewed on desktop" hint
- Hot key mnemonic for "O" (old portfolio) is not immediately obvious → tooltip on hover can explain it

## Migration Plan

1. Extract content data from `personalProjects.jsx`, `work.jsx`, `leadership.jsx` into a single `src/home/data/experiences.js` constant
2. Build `MacScreen.jsx` — handles typewriter state and mac-window content display
3. Build `Keyboard.jsx` — renders QWERTY layout, accepts `activeKey`, `highlightedCategory`, `onKeyPress`
4. Rewrite `home.jsx` — compose MacScreen + Keyboard, lift state, wire navbar
5. Update `navBar.jsx` — accept `onCategoryClick` prop, call it on link click
6. Gut `home.css` — remove banner/margin rules, add new layout styles
7. Smoke-test in `npm run dev`

Rollback: all changes are local; `git revert` is instant.

## Open Questions

- Should clicking the same hot key a second time return to the typewriter/intro screen, or stay on that item?
- Should multiple keys be pressable simultaneously (showing multiple items), or is it always one active key?
- What does "extras" contain? (Currently TBD — keyboard slot reserved.)
