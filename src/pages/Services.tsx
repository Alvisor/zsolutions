import ServiceCard from "../components/ServiceCard";
import supportImg from "../assets/support.png";
import documentationImg from "../assets/documentation.png";
import developmentImg from "../assets/development.png";
import "../styles/cards.css";

const Services = () => {
  return (
    <div className="container">
      <h2 className="section-title">Nuestros Servicios</h2>
      <div className="cards-container">
        <ServiceCard
          title="Bolsa de Horas"
          image={supportImg}
          description="Asistencia técnica especializada para aplicaciones en la nube. Flexibilidad y soporte eficiente."
        />
        <ServiceCard
          title="Levantamiento de Documentación"
          image={documentationImg}
          description="Identificación, análisis y optimización de procesos para mejorar la eficiencia."
        />
        <ServiceCard
          title="Desarrollo a la Medida"
          image={developmentImg}
          description="Soluciones de software personalizadas, desde análisis hasta implementación."
        />
      </div>
    </div>
  );
};

export default Services;
