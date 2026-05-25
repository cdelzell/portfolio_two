## 1. Extract Content Data

- [x] 1.1 Create `src/home/data/experiences.js` — export a `EXPERIENCES` object keyed by hot key letter (T, B, O, P, D, N, I, S, M, K, H), each with `{ name, blurb, details, time, image, category }` fields; pull values directly from the existing component files
- [x] 1.2 Define `KEYBOARD_ROWS` constant in the same file: three arrays matching QWERTY rows (row1: Q–P, row2: A–L, row3: Z–M)
- [x] 1.3 Define `CATEGORY_KEYS` constant mapping each category name to its key letters: `{ projects: ['T','B','O','P'], work: ['D','N','I'], leadership: ['S','M','K','H'] }`

## 2. MacScreen Component

- [x] 2.1 Create `src/home/components/MacScreen.jsx` — accepts props `activeKey` (null | letter) and `experiences` map; renders the laptop image as a positioned container with an absolutely-positioned screen overlay div
- [x] 2.2 When `activeKey` is null, render the typewriter intro view inside the overlay: use a `useEffect` + `setInterval` to append characters from the intro string to local state at ~70ms/char; on completion, set a `done` flag and show a blinking cursor via CSS
- [x] 2.3 Guard the typewriter with a `useRef` so it only runs once on initial mount even if the component re-renders
- [x] 2.4 When `activeKey` is a letter, render the mac-window chrome inside the overlay: a title bar div with three colored dots (red `#FF5F57`, yellow `#FEBC2E`, green `#28C840`) and the item name, followed by the item's image and content (blurb, details, time)
- [x] 2.5 Create `src/home/components/MacScreen.css` — style the screen overlay (position, background, border-radius to match screen shape), mac title bar, traffic light dots, and content area; add a `cursor-blink` keyframe animation for the blinking cursor

## 3. Keyboard Component

- [x] 3.1 Create `src/home/components/Keyboard.jsx` — accepts `activeKey`, `highlightedCategory`, `categoryKeys`, `hotKeys` (set of letters), and `onKeyPress` (letter → void); renders three rows of `<button>` elements from `KEYBOARD_ROWS`
- [x] 3.2 Each button: if the letter is in `hotKeys`, it is enabled and gets `data-hot`; if it matches `activeKey`, add `data-active`; if its letter is in `categoryKeys[highlightedCategory]`, add `data-category-highlight`; otherwise the button is `disabled`
- [x] 3.3 Create `src/home/components/Keyboard.css` — style the keyboard with a dark mac-style base; hot keys get a subtle glow or contrasting color; active key gets a pressed/lit style; category-highlighted keys get a distinct pulse or border; dead keys are dim and have `cursor: default`; all key transitions use `transition: 150ms ease`

## 4. Rewrite Home

- [x] 4.1 Rewrite `src/home/home.jsx` — hold `activeKey` (null | letter) and `highlightedCategory` (null | string) in state; render `<Navbar>` with a `onCategoryClick` prop, `<MacScreen>` with `activeKey`, and `<Keyboard>` with all required props; remove all old section/banner/wrapper markup
- [x] 4.2 Wire `onKeyPress` in Home: if the clicked key equals `activeKey`, set `activeKey` to null (return to intro); otherwise set `activeKey` to the clicked letter and clear `highlightedCategory`
- [x] 4.3 Rewrite `src/home/home.css` — remove all old `.workBanner`, `.notion`, negative-margin rules; add layout styles for the laptop + keyboard vertical stack (centered column, appropriate gap)

## 5. Update Navbar

- [x] 5.1 Update `src/components/navBar.jsx` — accept an optional `onCategoryClick` prop; when a category link is clicked, call `onCategoryClick(categoryName)` instead of (or in addition to) smooth scroll; remove `react-scroll` dependency if it is no longer used elsewhere
- [x] 5.2 Verify navbar appearance is visually identical to before (font, spacing, layout unchanged)

## 6. Verification

- [x] 6.1 Run `npm run dev` and confirm: typewriter plays once on load, cursor blinks after completion, animation does not replay on re-render
- [x] 6.2 Click each of the 11 hot keys and confirm the correct item content appears on screen with mac chrome
- [x] 6.3 Click an active key and confirm the screen returns to the intro text
- [x] 6.4 Click each navbar category link and confirm the correct key group highlights; click a highlighted key and confirm category highlight clears
- [x] 6.5 Confirm dead keys do not respond to clicks and navbar appearance is unchanged
