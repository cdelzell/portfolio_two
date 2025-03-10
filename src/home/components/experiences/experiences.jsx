import { useState } from "react";
import Experience from "./experience";
import "./experience.css";

function Experiences() {
  const [hideTrain, setHideTrain] = useState(false);
  const [hideStar, setHideStar] = useState(false);
  const [hideHammer, setHideHammer] = useState(false);

  const handleClick = (hideObject, setHideObject) => {
    if (!hideObject) {
      setHideObject(true);
    }
  };

  return (
    <div className="wrapper">
      <div className="experiences" id="experience">
        {hideTrain ? (
          <Experience
            image="ticket_to_ride"
            name="Ticket to Ride 🚂"
            blurb="I learned a ton about how to create a full stack web application, and got to work with a great team to finish the product!"
            details="a full stack web application in React and Typescript with multi-player support."
          />
        ) : (
          <button onClick={() => handleClick(hideTrain, setHideTrain)}>
            🚂
          </button>
        )}

        {hideStar ? (
          <Experience image="bright" name="A Brighter Future ⭐" />
        ) : (
          <button onClick={() => handleClick(hideStar, setHideStar)}>✨</button>
        )}

        {hideHammer ? (
          <Experience image="portfolio_original" name="My first portfolio 🔨" />
        ) : (
          <button onClick={() => handleClick(hideHammer, setHideHammer)}>
            🔨
          </button>
        )}
      </div>
    </div>
  );
}

export default Experiences;
