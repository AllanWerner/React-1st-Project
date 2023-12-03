import "./index.css";

function Card({ titre, origine, image }) {
  return (
    <div className="card">
      <div className="content">
        <div>
          <img src={image} alt="" />
        </div>
        <div className="descrip">
          <h2 className="title_card">{titre}</h2>
          <p className="descri">Origine: {origine} </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
