import "./index.css";
import logo from "../../assets/lion.png";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header_title">
        <h1>welcome to africa</h1>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
