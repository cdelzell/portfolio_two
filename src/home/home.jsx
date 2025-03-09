import Navbar from "../components/navBar";
import Experiences from "./components/experiences/experiences";
import "./home.css";

function Home() {
  return (
    <div className="page">
      <Navbar />
      <img className="comp" src="./public/assets/comp2.png" />
      {/* <p>of products, people, and experiences.</p> */}
      <p />
      <Experiences />
    </div>
  );
}

export default Home;
