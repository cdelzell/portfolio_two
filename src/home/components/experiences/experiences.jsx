import Experience from "./experience";
import "./experience.css";

function Experiences() {
  return (
    <div className="experiences" id="experience">
      <Experience
        name="ticket_to_ride"
        blurb="I learned a ton about how to create a full stack web application, and got to work with a great team to finish the product!"
        details="Ticket to Ride, a full stack web application in React and Typescript with multi-player support."
      />
      <Experience name="bright" />
      <Experience name="portfolio_original" />
    </div>
  );
}

export default Experiences;
