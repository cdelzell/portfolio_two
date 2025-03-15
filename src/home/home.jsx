import Navbar from "../components/navBar";
import PersonalProjects from "./components/experiences/personalProjects";
import Work from "./components/experiences/work";
import "./home.css";

function Home() {
  return (
    <div className="page">
      <Navbar />
      <img className="comp" src="./assets/smallComp.png" />
      {/* <p>of products, people, and experiences.</p> */}
      <p />
      <PersonalProjects />
      <div className="workBanner">
        <h1>work</h1>
      </div>
      <div style={{ marginTop: "-30vw" }}>
        <Work />
      </div>
    </div>
  );
}

export default Home;
