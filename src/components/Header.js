import NavLinks from "./NavLinks";
import logo from "../images/react.png";

const Header = () => {
  return (
    <header className="header container">
      <img className="logo" src={logo} alt="Logo" />
      <NavLinks />
    </header>
  );
};

export default Header;
