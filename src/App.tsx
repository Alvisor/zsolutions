import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Contact from "./pages/Contact";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </div>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
