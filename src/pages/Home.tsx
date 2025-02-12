import { motion } from "framer-motion";
import ClientCarousel from "../components/ClientCarousel";

const Home = () => {
  return (
    <div className="container">
      {/* Animación de fade-in con deslizamiento desde abajo */}
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Bienvenido a Z Solutions</h2>
        <p>
          Somos una empresa líder en consultoría de desarrollo de software, con más de 10 años de experiencia en la creación de soluciones innovadoras.
        </p>
      </motion.section>

      {/* Sección de clientes con animación de fade-in */}
      <motion.section 
        className="clients-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2>Nuestros Clientes</h2>
        <ClientCarousel />
      </motion.section>
    </div>
  );
};

export default Home;
