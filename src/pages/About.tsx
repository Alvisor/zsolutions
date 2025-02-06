import { FaBarsProgress, FaEarListen } from "react-icons/fa6";
import "../styles/about.css";
import { FaLaptopCode, FaChartLine, FaUsers, FaToolbox } from "react-icons/fa";

const About = () => {
  return (
    <div className="container">
      <h2 className="section-title">¿Quiénes Somos?</h2>
      <div className="about-grid">
        <div className="about-card">
          <FaLaptopCode className="about-icon" />
          <h3>Desarrollo de Software</h3>
          <p>Más de 10 años creando soluciones tecnológicas innovadoras.</p>
        </div>
        <div className="about-card">
          <FaEarListen className="about-icon" />
          <h3>Escucha activa</h3>
          <p>Nos tomamos el tiempo para entender tus necesidades y objetivos.</p>
        </div>
        <div className="about-card">
          <FaUsers className="about-icon" />
          <h3>Asesoramiento personalizado</h3>
          <p>Nuestros expertos te brindan recomendaciones y soluciones adaptadas a tus necesidades específicas.</p>
        </div>
        <div className="about-card">
          <FaChartLine className="about-icon" />
          <h3>Implementación y configuración</h3>
          <p>Nuestro equipo te ayuda a implementar y configurar nuestras soluciones para asegurarnos de que se ajusten a tus necesidades.</p>
        </div>
        <div className="about-card">
          <FaToolbox className="about-icon" />
          <h3>Capacitación y soporte</h3>
          <p>Te brindamos capacitación y soporte continuo para asegurarnos de que estés obteniendo el máximo valor de nuestras soluciones.</p>
        </div>
        <div className="about-card">
          <FaBarsProgress className="about-icon" />
          <h3>Seguimiento y evaluación</h3>
          <p>Nos mantenemos en contacto contigo para asegurarnos de que estés satisfecho con nuestras soluciones y para identificar oportunidades de mejora.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
