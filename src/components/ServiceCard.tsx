import { useState } from "react";
import "../styles/cards.css"; 

interface ServiceCardProps {
  title: string;
  image: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, image, description }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
      <div className="card-inner">
        {/* Lado frontal */}
        <div className="card-front">
          <img src={image} alt={title} />
          <h3>{title}</h3>
        </div>
        {/* Lado trasero */}
        <div className="card-back">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
