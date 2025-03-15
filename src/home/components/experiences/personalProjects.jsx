import { useState } from "react";
import Experience from "./experience";
import "./experience.css";

function PersonalProjects() {
  const [hideTrain, setHideTrain] = useState(true);
  const [hideStar, setHideStar] = useState(true);
  const [hideHammer, setHideHammer] = useState(true);

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
            blurb="Essentially a crash course in how to create a full stack web application while getting to work with a great team!"
            details="a full stack web application in React and Typescript with multi-player support."
          />
        ) : (
          <button onClick={() => handleClick(hideTrain, setHideTrain)}>
            🚂
          </button>
        )}

        {hideStar ? (
          <Experience
            image="bright"
            name="A Brighter Future ⭐"
            blurb="I worked on a team of four at a 24-hour hackathon to make this project. Our vision was a community-based galaxy simulation site, and we successfuly deployed the product!"
            details="a full stack web application in React and Javascript with multi-player support."
          />
        ) : (
          <button onClick={() => handleClick(hideStar, setHideStar)}>✨</button>
        )}

        {hideHammer ? (
          <Experience
            image="portfolio_original"
            name="My first portfolio 🔨"
            blurb="This was my first venture into front-end, and taught me the basics. It was the first time I realized how complex design really is, but also how much fun creating web applications can be!"
            details="a portfolio webside in HTML, CSS, and Javascript."
          />
        ) : (
          <button onClick={() => handleClick(hideHammer, setHideHammer)}>
            🔨
          </button>
        )}
      </div>
    </div>
  );
}

export default PersonalProjects;
