import image from "../assets/Menu/entree.png";
import image1 from "../assets/Menu/plat.png";
import image2 from "../assets/Menu/dessert.png";
import "./index.css";

function Carte() {
  return (
    <div>
      <div>
        <img src={image} alt="image_menu" />
      </div>
      <div>
        <img src={image1} alt="image_menu" />
      </div>
      <div>
        <img src={image2} alt="image_menu" />
      </div>
    </div>
  );
}

export default Carte;
