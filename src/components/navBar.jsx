import "./navBar.css";

function Navbar({ onCategoryClick }) {
  const categories = ["projects", "work", "leadership", "extras"];

  return (
    <nav className="navBar">
      <h1 className="name">c l a r a &nbsp;&nbsp;d e l z e l l</h1>
      <ul className="navLinks">
        {categories.map((item) => (
          <p key={item}>
            <span
              className="nav-link"
              onClick={() => onCategoryClick?.(item)}
            >
              {item}
            </span>
          </p>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
