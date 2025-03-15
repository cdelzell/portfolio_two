import { Link } from "react-scroll";
import "./navBar.css";

function Navbar() {
  return (
    <nav className="navBar">
      <h1 className="name">c l a r a &nbsp;&nbsp;d e l z e l l</h1>
      <ul className="navLinks">
        {["projects", "work", "leadership", "extras"].map((item) => (
          <p key={item}>
            <Link to={item} smooth={true} duration={500}>
              {item}
            </Link>
          </p>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
