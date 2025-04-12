import { useState } from "react";
import Experience from "./experience";
import ticket from "/assets/experiences/ticket_to_ride.png";
import bright from "/assets/experiences/bright.png";
import portfolio1 from "/assets/experiences/portfolio_original.png";
import portfolio2 from "/assets/experiences/raikes.png";

import "./experience.css";

function PersonalProjects() {
  const [hideTrain, setHideTrain] = useState(true);
  const [hideStar, setHideStar] = useState(true);
  const [hideHammer, setHideHammer] = useState(true);
  const [hideWrench, setHideWrench] = useState(true);

  const handleClick = (hideObject, setHideObject) => {
    if (!hideObject) {
      setHideObject(true);
    }
  };

  return (
    <div className="wrapper" id="projects">
      <div className="experiences">
        {hideTrain ? (
          <Experience
            image={ticket}
            name="Ticket to Ride 🚂"
            blurb="Essentially a crash course in how to create a full stack web application while getting to work with a great team!"
            details="a full stack web application in React and Typescript with multi-player support."
            time="January 2025 - May 2025"
          />
        ) : (
          <button onClick={() => handleClick(hideTrain, setHideTrain)}>
            🚂
          </button>
        )}

        {hideStar ? (
          <Experience
            image={bright}
            name="A Brighter Future ⭐"
            blurb="I worked on a team of four at a 24-hour hackathon to make this project. Our vision was a community-based galaxy simulation site, and we successfuly deployed the product!"
            details="a full stack web application in React and Javascript with multi-player support."
            time="March 2025"
          />
        ) : (
          <button onClick={() => handleClick(hideStar, setHideStar)}>✨</button>
        )}

        {hideHammer ? (
          <Experience
            image={portfolio1}
            name="My first portfolio 🔨"
            blurb="This was my first venture into front-end, and taught me the basics. It was the first time I realized how complex design really is, but also how much fun creating web applications can be!"
            details="a portfolio webside in HTML, CSS, and Javascript."
            time="June 2024 - July 2024"
          />
        ) : (
          <button onClick={() => handleClick(hideHammer, setHideHammer)}>
            🔨
          </button>
        )}

        {hideWrench ? (
          <Experience
            image={portfolio2}
            name="My second portfolio 🔨"
            blurb="This was my return to front-end after getting a lot more experience, and was a fun design process as I thought through how to make a website that I really liked rather than just was able to scrape together :)"
            details="a portfolio webside in React, HTML, and CSS."
            time="March 2025 - April 2025"
          />
        ) : (
          <button onClick={() => handleClick(hideWrench, setHideWrench)}>
            🔨
          </button>
        )}
      </div>
    </div>
  );
}

export default PersonalProjects;
