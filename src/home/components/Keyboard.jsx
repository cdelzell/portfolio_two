import { KEYBOARD_ROWS } from '../data/experiences';
import './Keyboard.css';

function Keyboard({ activeKey, highlightedCategory, categoryKeys, hotKeys, onKeyPress }) {
  const categoryHighlightKeys = highlightedCategory ? categoryKeys[highlightedCategory] : [];

  return (
    <div className="keyboard">
      {KEYBOARD_ROWS.map((row, rowIndex) => (
        <div key={rowIndex} className={`keyboard-row keyboard-row-${rowIndex + 1}`}>
          {row.map(letter => {
            const isHot = hotKeys.has(letter);
            const isActive = activeKey === letter;
            const isCategoryHighlight = categoryHighlightKeys.includes(letter);

            const dataAttrs = {};
            if (isHot) dataAttrs['data-hot'] = true;
            if (isActive) dataAttrs['data-active'] = true;
            if (isCategoryHighlight) dataAttrs['data-category-highlight'] = true;

            return (
              <button
                key={letter}
                className="key"
                disabled={!isHot}
                onClick={isHot ? () => onKeyPress(letter) : undefined}
                {...dataAttrs}
              >
                {letter}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
