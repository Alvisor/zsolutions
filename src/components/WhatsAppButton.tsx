import { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa"; 
import "../styles/contact-form.css"; 

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div>
      {!isOpen ? (
        <button 
          className="whatsapp-button" 
          onClick={() => setIsOpen(true)}
        >
          <FaWhatsapp size={20} style={{ marginRight: "8px" }} /> Contactar por WhatsApp
        </button>
      ) : (
        <div className="contact-card">
          <button className="close-button" onClick={() => setIsOpen(false)}>
            <FaTimes size={16} />
          </button>
          <h2>Contáctanos</h2>

          {submitted ? (
            <p className="success-message">✅Pronto nos pondremos en contacto contigo.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <label>Nombre:</label>
              <input type="text" placeholder="Tu nombre" required />

              <label>Correo:</label>
              <input type="email" placeholder="Tu correo" required />

              <label>Indicativo:</label>
              <select required>
                <option value="+57">🇨🇴 +57 (Colombia)</option>
                <option value="+1">🇺🇸 +1 (USA)</option>
                <option value="+52">🇲🇽 +52 (México)</option>
                <option value="+34">🇪🇸 +34 (España)</option>
              </select>

              <label>Número de teléfono:</label>
              <input type="tel" placeholder="Tu número" required />

              <label>Mensaje:</label>
              <textarea placeholder="Tu mensaje" required></textarea>

              <button type="submit">Enviar</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
