import "./index.css";
import icon1 from "../../assets/icones/facebook.svg";
import icon2 from "../../assets/icones/instagram.svg";
import icon3 from "../../assets/icones/tiktok.svg";
import icon4 from "../../assets/icones/linkedin.svg";

const icon_app = [
  { photo: icon1, alt: "icone" },
  { photo: icon2, alt: "icone" },
  { photo: icon3, alt: "icone" },
  { photo: icon4, alt: "icone" },
];

function Footer() {
  return (
    <footer>
      <div>
        <h2>Welcome to Africa</h2>
        <p>Welcome to Africa © 2023 All rights reserved.</p>
        <p>
          Terms of use |{" "}
          <a href="#" className="Privacy" target="_blank">
            Privacy police
          </a>
        </p>
      </div>

      <div>
        <h4>Contact</h4>
        <p>25 rue Claude Tillier, Paris 12e arrondissement</p>
        <p>Telephone: +33 800 603 6035 E-mail: mail@AfricaMeal.org</p>
      </div>

      <div class="media_foot">
        <h4>Social Media</h4>
        <div class="media-bloc">
          {icon_app.map((id) => (
            <div key={id}>
              <img src={id.photo} alt={id.alt} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
