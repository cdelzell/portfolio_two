import "./experience.css";

function Experience({ name }) {
  return (
    <div className="block">
      <img
        className="expImage"
        src={`/assets/experiences/${name}.png`}
        alt={name}
      ></img>
      {/* <div className="info"></div> */}
    </div>
  );
}

export default Experience;
