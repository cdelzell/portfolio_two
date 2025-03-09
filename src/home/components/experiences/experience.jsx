import { useState } from "react";
import "./experience.css";

function Experience({ image, name, details, blurb }) {
  const [shareMore, setShareMore] = useState(false);
  const [opacityHandler, setOpacityHandler] = useState("");

  const handleHover = () => {
    if (shareMore) {
      setShareMore(false);
      setOpacityHandler("");
    } else {
      setShareMore(true);
      setOpacityHandler("opacityHandler");
    }
  };

  return (
    <div
      className="block"
      onMouseEnter={() => handleHover()}
      onMouseLeave={() => handleHover()}
    >
      <img
        className={`expImage ${opacityHandler}`}
        src={`/assets/experiences/${image}.png`}
        alt={name}
      />
      {shareMore ? (
        <div className="expImage expBlurb" style={{}}>
          <p style={{ padding: "1vw" }}>{blurb}</p>
        </div>
      ) : (
        <></>
      )}

      <div className="info">
        <h2>{name}</h2>
        <p>{details}</p>
      </div>
    </div>
  );
}

export default Experience;
