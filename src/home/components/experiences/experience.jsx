import { useState } from "react";
import "./experience.css";

function Experience({ image, name, details, blurb, time }) {
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
      {shareMore ? <div className="expImage expBlurb" style={{}}></div> : <></>}
      <img
        className={`expImage ${opacityHandler}`}
        src={`/assets/experiences/${image}.png`}
        alt={name}
      />
      {shareMore ? (
        <div className="expImageBlurb expBlurb" style={{}}>
          <p style={{ marginLeft: ".3vw", marginTop: ".3vw" }}>{blurb}</p>
        </div>
      ) : (
        <></>
      )}
      <div className="info">
        <div className="nameTime">
          <h2>{name}</h2>
          <h4>{time}</h4>
        </div>
        <div className="details">
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
