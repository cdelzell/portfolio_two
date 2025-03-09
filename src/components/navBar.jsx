import "./navBar.css";

function Navbar() {
  return (
    <nav className="navBar">
      <h1 className="name">c l a r a &nbsp;&nbsp;d e l z e l l</h1>
      <ul className="navLinks">
        {["experience", "personal", "leadership", "extras"].map((item) => (
          <p key={item}>
            <a href={item}>{item}</a>
          </p>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
