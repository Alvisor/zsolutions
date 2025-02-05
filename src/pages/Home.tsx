import ClientCarousel from "../components/ClientCarousel";

const Home = () => {
  return (
    <div className="container">
      <section className="hero-section">
        <h2 className="section-title">Bienvenido a Z Solutions</h2>
        <p>
          Somos una empresa líder en consultoría de desarrollo de software, con más de 10 años de experiencia en la creación de soluciones innovadoras.
        </p>
        <a href="/contacto" className="btn">Agenda una cita</a>
      </section>

      <section className="clients-section">
        <h2>Nuestros Clientes</h2>
        <ClientCarousel />
      </section>
    </div>
  );
};

export default Home;
