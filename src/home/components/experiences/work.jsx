import { useState } from "react";
import Experience from "./experience";
import scoular from "/assets/experiences/scoularBuild.png";
import nsaa from "/assets/experiences/nsaaBG.png";
import raikes from "/assets/experiences/raikes.png";

import "./experience.css";

function Work() {
  const handleClick = (hideObject, setHideObject) => {
    if (!hideObject) {
      setHideObject(true);
    }
  };

  return (
    <div className="wrapper" id="work">
      <div className="experiences">
        <Experience
          image={scoular}
          name="Data Analytics Intern 🌽"
          blurb="My main project was creating a system to monitor all the data pipelines my team had running, alerting and protecting against data pipeline issues! This tool was used in all stand-up meetings."
          details="worked on a team of 8 with data pipelines, Power-BI, & data extraction/analysis."
          time="May 2024 - August 2024"
        />

        <Experience
          image={nsaa}
          name="Design Studio Software Intern  🏀"
          blurb="One highlight of this experience was getting to learn more about the database world as we worked on moving from flat to relational data!"
          details="worked on an Agile team of 6 to help deliver a website for officials to the NSAA."
          time="January 2024 - May 2024"
        />

        <Experience
          image={raikes}
          name="Innovation Processes Teaching Assistant 🏔"
          blurb="I helped with this class in the fall of 2023, and am returning for the fall of 2024! This class is a great way to teach entreprenuership, and has been a highlight of my college career."
          details="worked with 40 students on start-up style projects from ideation to pre-production."
          time="Fall 2024, Fall 2025"
        />
      </div>
    </div>
  );
}

export default Work;
