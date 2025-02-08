import { Link } from "react-router-dom";
import "../styles/global.css";
import logo from "../assets/logos/ZSolutionsLogo.png"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo con enlace a inicio */}
      <Link to="/" className="logo-container">
        <img src={logo} alt="Z Solutions Logo" className="logo" />
      </Link>

      {/* Links de navegación */}
      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/about">¿Quiénes Somos?</Link>
        <Link to="/services">Servicios</Link>
      </div>
    </nav>
  );
};

export default Navbar;
