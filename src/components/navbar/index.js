import "./index.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navground">
      <ul>
        <NavLink to="/carte">
          <li>Carte</li>
        </NavLink>
        <NavLink to="/entree">
          <li>Entrées</li>
        </NavLink>
        <NavLink to="/plats">
          <li>Plats</li>
        </NavLink>
        <NavLink to="dessert">
          <li>Desserts</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
