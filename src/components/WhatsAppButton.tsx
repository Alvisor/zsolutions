import { useState } from "react";
import "../styles/contact-form.css"; 

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {!isOpen ? (
        <button 
          className="whatsapp-button" 
          onClick={() => setIsOpen(true)}
        >
          💬 Contactar por WhatsApp
        </button>
      ) : (
        <div className="contact-card">
          <button className="close-button" onClick={() => setIsOpen(false)}>✖</button>
          <h2>Contáctanos</h2>
          <form>
            <label>Nombre:</label>
            <input type="text" placeholder="Tu nombre" required />

            <label>Correo:</label>
            <input type="email" placeholder="Tu correo" required />

            <label>Mensaje:</label>
            <textarea placeholder="Tu mensaje" required></textarea>

            <button type="submit">Enviar</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
