import { useState, useEffect, useRef } from 'react';
import './MacScreen.css';

const INTRO_TEXT = "hi! my name is clara, and I am a developer";
const CHAR_DELAY = 70;

function MacScreen({ activeKey, experiences }) {
  const [displayed, setDisplayed] = useState('');
  const [typingDone, setTypingDone] = useState(false);
  const animationDone = useRef(false);

  useEffect(() => {
    if (activeKey) return;
    // Once the animation has completed once, just show full text on return
    if (animationDone.current) {
      setDisplayed(INTRO_TEXT);
      setTypingDone(true);
      return;
    }

    let i = 0;
    setDisplayed('');
    setTypingDone(false);
    const interval = setInterval(() => {
      i++;
      setDisplayed(INTRO_TEXT.slice(0, i));
      if (i >= INTRO_TEXT.length) {
        clearInterval(interval);
        setTypingDone(true);
        animationDone.current = true;
      }
    }, CHAR_DELAY);
    return () => clearInterval(interval);
  }, [activeKey]);

  const experience = activeKey ? experiences[activeKey] : null;

  return (
    <div className="mac-screen">
      <div className="mac-titlebar">
        <span className="dot dot-red" />
        <span className="dot dot-yellow" />
        <span className="dot dot-green" />
        {experience && <span className="mac-window-title">{experience.name}</span>}
      </div>
      <div className="mac-body">
        {experience?.type === 'pdf' ? (
          <iframe
            className="mac-pdf"
            src={experience.pdfSrc}
            title={experience.name}
          />
        ) : experience ? (
          <div className="mac-content">
            <img className="mac-img" src={experience.image} alt={experience.name} />
            <div className="mac-info">
              <p className="mac-time">{experience.time}</p>
              <p className="mac-blurb">{experience.blurb}</p>
              <p className="mac-details">{experience.details}</p>
            </div>
          </div>
        ) : (
          <div className="typewriter-view">
            <span className="typewriter-text">{displayed}</span>
            {typingDone && <span className="cursor" />}
          </div>
        )}
      </div>
    </div>
  );
}

export default MacScreen;
