import "./index.css";
import Paragraphe from "../paragraph";

function AtoutBloc({ texte, logo, position }) {
  if (position === "right") {
    return (
      <div className="bloc">
        <div className="text">
          <Paragraphe texte={texte}></Paragraphe>
        </div>
        <div className="atout">
          <img src={logo} alt="atout-img" />
        </div>
      </div>
    );
  } else if (position === "left") {
    return (
      <div className="bloc">
        <div className="atout">
          <img src={logo} alt="atout-img" />
        </div>
        <div className="text">
          <Paragraphe texte={texte}></Paragraphe>
        </div>
      </div>
    );
  }
}

export default AtoutBloc;
