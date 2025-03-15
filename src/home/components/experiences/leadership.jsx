import { useState } from "react";
import Experience from "./experience";
import "./experience.css";

function Leadership() {
  const handleClick = (hideObject, setHideObject) => {
    if (!hideObject) {
      setHideObject(true);
    }
  };

  return (
    <div className="wrapper" id="leadership">
      <div className="experiences">
        <Experience
          image="raikes"
          name="Student Advisory Board President 🌽"
          blurb="This position has shown me both sides of organizations, as I have had to work closely with staff and students to try and get both sides on the same page. This can be complex, but rewarding!"
          details="lead a board of student representatives from the Raikes school tasked to advise staff on program-wide improvements."
          time="August 2023 - Present"
        />

        <Experience
          image="nsaaBG"
          name="SALT Ministry: Student Leader"
          blurb="One highlight of this experience was getting to learn more about the database world as we worked on moving from flat to relational data!"
          details="co-lead a group of 10-15 girls weekly, assist with Welcome team at weekly 500+ gatherings."
          time="January 2024 - May 2024"
        />

        <Experience
          image="raikes"
          name="Kauffman Residents Assn Vice President"
          blurb="Initially, I joined this because I was frustrated with the state of our kitchens. We were able to fully restock our kitchens as of December 2024, with new items, even getting a Kitchen-Aid!"
          details="work on the executive team to keep the building properly maintained and organize events for residents."
          time="August 2024 - Present"
        />

        <Experience
          image="raikes"
          name="NHRI Leadership Mentor"
          blurb="I helped with this class in the fall of 2023, and am returning for the fall of 2024! This class is a great way to teach entreprenuership, and has been a highlight of my college career."
          details="selected as a mentor in the NHRI class of 2023. meet weekly with a high school mentee and attend weekly project meetings."
          time="March 2024 - Present"
        />
      </div>
    </div>
  );
}

export default Leadership;
