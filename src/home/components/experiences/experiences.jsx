import Experience from "./experience";
import "./experience.css";

function Experiences() {
  return (
    <div className="experiences" id="experience">
      <Experience
        image="ticket_to_ride"
        name="Ticket to Ride 🚂"
        blurb="I learned a ton about how to create a full stack web application, and got to work with a great team to finish the product!"
        details="a full stack web application in React and Typescript with multi-player support."
      />
      <Experience image="bright" name="A Brighter Future ⭐" />
      <Experience image="portfolio_original" name="My first portfolio 🔨" />
    </div>
  );
}

export default Experiences;
