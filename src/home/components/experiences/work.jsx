import { useState } from "react";
import Experience from "./experience";
import "./experience.css";

function Work() {
  const handleClick = (hideObject, setHideObject) => {
    if (!hideObject) {
      setHideObject(true);
    }
  };

  return (
    <div className="wrapper">
      <div className="experiences" id="experience">
        <Experience
          image="scoularBuild"
          name="Data Analytics Intern 🌽"
          blurb="My main project was creating a system to monitor all the data pipelines my team had running, alerting and protecting against data pipeline issues! This tool was used in all stand-up meetings."
          details="worked on a team of 8 with data pipelines, Power-BI, & data extraction/analysis."
        />

        <Experience
          image="nsaaBG"
          name="Design Studio Software Intern  🏀"
          blurb="One highlight of this experience was getting to learn more about the database world as we worked on moving from flat to relational data!"
          details="worked on an Agile team of 6 to help deliver a website for officials to the NSAA.
"
        />

        <Experience
          image="ticket_to_ride"
          name="Innovation Processes Teaching Assistant 🏔"
          blurb="Essentially a crash course in how to create a full stack web application while getting to work with a great team!"
          details="worked with 40 students on start-up style projects from ideation to pre-production."
        />
      </div>
    </div>
  );
}

export default Work;
