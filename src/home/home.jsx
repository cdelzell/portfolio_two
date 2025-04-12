import Navbar from "../components/navBar";
import PersonalProjects from "./components/experiences/personalProjects";
import Work from "./components/experiences/work";
import Leadership from "./components/experiences/leadership";
import Footer from "../components/footer";
import notion from "/assets/notion.png";
import arrow_down from "/assets/arrow-down.png";
import instagram from "/assets/instagram.svg";
import linkedin from "/assets/linkedin.svg";
import github from "/assets/github.svg";
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
        <h1 style={{ fontStyle: "italic", fontSize: "6vw" }}>
          work experience
        </h1>
      </div>
      <div style={{ marginTop: "-30vw" }}>
        <Work />
      </div>
      <div className="workBanner">
        <h1 style={{ fontStyle: "italic", fontSize: "6vw" }}>leadership</h1>
      </div>
      <div style={{ marginTop: "-30vw" }}>
        <Leadership />
      </div>
      <div className="notion">
        <img src={notion} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
