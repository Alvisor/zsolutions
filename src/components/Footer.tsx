import { FaLinkedin, FaTiktok, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <FaXTwitter size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <FaTiktok size={24} />
        </a>
      </div>

      <p className="footer-text">
        © {new Date().getFullYear()} Z Solutions. Todos los derechos reservados.
      </p>
      <p className="footer-text">Desarrollado por <strong>Z Solutions</strong></p>
    </footer>
  );
};

export default Footer;
