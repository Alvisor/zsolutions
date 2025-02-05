import { Link } from "react-router-dom";
import "../styles/global.css"; 

const Navbar = () => {
  return (
    <nav>
      <h1>Z Solutions</h1>
      <div>
        <Link to="/">Inicio</Link>
        <Link to="/about">¿Quiénes Somos?</Link>
        <Link to="/services">Servicios</Link>
      </div>
    </nav>
  );
};

export default Navbar;
