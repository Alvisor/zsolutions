const Contact = () => {
    return (
      <div className="contact-container">
        <h2>Contáctanos</h2>
        <p>Déjanos un mensaje y te responderemos lo más pronto posible.</p>
  
        <form className="contact-form">
          <label>Nombre:</label>
          <input type="text" placeholder="Tu nombre" required />
  
          <label>Correo:</label>
          <input type="email" placeholder="Tu correo" required />
  
          <label>Mensaje:</label>
          <textarea placeholder="Tu mensaje" required></textarea>
  
          <button type="submit" className="btn">Enviar</button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  