import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Usar importaciones directas para asegurar que las imágenes se carguen bien
import AndesLogo from "../assets/logos/AndesLogo.png";
import VasagenLogo from "../assets/logos/VasagenLogo.png";
import WallyLogo from "../assets/logos/WallyLogo.png";

const clients = [
  { name: "Universidad de los Andes", logo: AndesLogo },
  { name: "VASAGEN", logo: VasagenLogo },
  { name: "Wally", logo: WallyLogo }
];

const ClientCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="client-carousel">
      <Slider {...settings}>
        {clients.map((client, index) => (
          <div key={index} className="client-slide">
            <p className="client-name">{client.name}</p>
            <img src={client.logo} alt={client.name} className="client-logo" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientCarousel;
