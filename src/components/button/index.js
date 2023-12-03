import "./index.css";

function Button({ texte, type }) {
  return (
    <div>
      {type === "contact" ? (
        <button className="btn b1">{texte}</button>
      ) : (
        <button className="btn b2">{texte}</button>
      )}
    </div>
  );
}

export default Button;
