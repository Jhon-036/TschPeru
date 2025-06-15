import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ModalCotizacion from "./ModalCotizacion";

const ShopMain = () => {

  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", ruc: "", message: "" });

  const handleQuoteClick = (productName) => {
    setSelectedProduct(productName);
    setQuoteDialogOpen(true);
    setShowEmailForm(false);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Formulario enviado con éxito");
    setQuoteDialogOpen(false);
    setShowEmailForm(false);
    setFormData({ name: "", email: "", phone: "", ruc: "", message: "" });
  };
  const handleWhatsAppClick = () => {
    if (!selectedProduct) return;
    const telefono = "51951758040";
    const mensaje = `Hola TSCH, revisé su sitio web y estoy interesado en '${selectedProduct}'`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const featuredCategories = [
    { name: "Componentes hidraulicos", image: "/com-hidraulico-inicio.png" },
    { name: "Portacontenedores", image: "/portacontenedores-inicio.png" },
    { name: "Transmisiones", image: "/transmision-inicio.png" },
    { name: "Motores", image: "/motor-inicio.png" },
  ];

  const featuredParts = [
    {
      nombre: "ELECTROVÁLVULA",
      category: "Componentes hidraulicos",
      descripcion: 'Control hidráulico',
      image: "/electrovalvula.png",
    },
    {
      nombre: "SELECTOR DE MARCHA",
      category: "Portacontenedores",
      descripcion: 'Valeo - Equipos KALMAR',
      image: "/selector-de-marcha.png",
    },
    {
      nombre: "SENSOR INDUCTIVO",
      category: "Sensores industriales",
      descripcion: '⌀ M18, IFM electronic',
      image: "/sensor-inductivo-m18.png",
    },
    {
      nombre: "KIT DEUTSCH 3 PINES",
      category: "Transmisión",
      descripcion: 'Conector hembra y macho + pines 16 a 22AWG / SERIE DT',
      image: "/kit-deutsch-3-pines.png",
    },
  ];

  return (
    <div className="">
      <div className="w-[85%] max-w-7xl mx-auto py-8 mt-8 m-auto">

        {/* Título principal */}
        <div data-aos="fade-up">
          <h2 className="text-[#254168] text-center font-bold text-[clamp(1.5rem,5vw,3.2rem)]">
            Potencia tu equipo, evoluciona con nosotros
          </h2>
          <p className="text-center mt-4 text-[#254168cc] text-[clamp(0.9rem,2vw,1.5rem)] max-w-4xl mx-auto">
            Moderniza tu operación con soluciones que marcan la diferencia.
          </p>
        </div>

        {/* Categorías Populares */}
        <div className="mt-16" data-aos="fade-up">
          <div className="flex justify-between items-center mb-4 gap-5">
            <h3 className="text-[#254168] font-semibold text-[clamp(1.2rem,4vw,1.6rem)]">
              Categorías Populares
            </h3>
            <Link to={'/productos'}>
              <p className="text-sm md:text-lg flex items-center gap-1 text-[#f9cb21] cursor-pointer hover:underline">
                Ver Todas <FaArrowRight />
              </p>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 xl:gap-8 lg:mt-10">
            {featuredCategories.map((category, index) => (
              <Link
                key={index}
                to={`/productos?categoria=${encodeURIComponent(category.name)}`}
                data-aos="fade-up"
                data-aos-delay={`${index * 150}`}
              >
                <div
                  className="relative w-full aspect-square bg-cover bg-center bg-no-repeat transition-transform duration-300 hover:scale-105 cursor-pointer shadow-md"
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-[#f9cb21] text-white text-center">
                    <h2 className="font-semibold text-[clamp(1rem,2vw,1.2rem)]">{category.name}</h2>
                  </div>
                </div>
              </Link>
            ))}

          </div>
        </div>


        {/* Productos Destacados */}
        <div className="mt-12" data-aos="fade-up">
          <div className="flex justify-between items-center mb-4 gap-5">
            <h3 className="text-[#254168] font-semibold text-[clamp(1.2rem,4vw,1.6rem)]">
              Productos Destacados
            </h3>
            <Link to={'/productos'}>
              <p className="text-sm md:text-lg flex items-center gap-1 text-[#f9cb21] cursor-pointer hover:underline">
                Ver Todas <FaArrowRight />
              </p>
            </Link>
          </div>
          <div className="flex  justify-between overflow-x-auto scrollbar-hide gap-4 py-4 px-[1px]">
            {featuredParts.map((part, index) => (
              <div key={index} className="flex-shrink-0 w-[288px] rounded shadow-md">
                <div className="w-full aspect-square relative">
                  <img src={part.image} alt={part.name} className="object-cover w-full h-full block" />
                </div>
                <div className="p-4 flex gap-1 flex-col">
                  <div>
                    <h3 className="font-semibold text-[#254168]">{part.nombre}</h3>
                  </div>
                  <div>
                    <p className="text-[12px] text-[#254168]/40">{part.category}</p>
                  </div>
                  <div>
                    <p className="pt-1 text-[14px] text-[#254168]">{part.descripcion}</p>
                  </div>
                  <div>
                    <button
                      className="w-full mt-2 bg-[#f9cb21] hover:bg-[#e0b71e] text-[#254168] font-bold p-2 rounded cursor-pointer"
                      onClick={() => handleQuoteClick(part.nombre)}
                    >
                      Cotizar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Marcas */}
      <section className="w-full bg-white pb-10">
        <div className="w-[85%] max-w-7xl mx-auto py-10">
          <h2 className="text-center text-3xl text-[#254168] font-semibold">Nuestras Marcas</h2>
          <p className="text-center mt-2.5 text-[18px]">Trabajamos con las mejores marcas del mercado para garantizar la calidad y confiabilidad de todos nuestros productos y servicios.</p>
        </div>
        <div className="py-10 overflow-x-auto w-[85%] max-w-7xl m-auto flex flex-col gap-2">
          <div className="flex gap-8 w-[85%] max-w-7xl">
            <div className="flex gap-2 min-w-max"> {/* Aquí hemos aplicado min-w-max para evitar que las imágenes se recorten o se ajusten en pantallas pequeñas */}
              <div className="w-[8.4rem] rounded bg-[#eee] flex flex-col justify-center items-center object-contain p-4">
                <img src="/atos.png" className="w-full" alt="tsch-atos" />
              </div>
              <div className="w-[8.4rem] rounded bg-[#eee] flex flex-col justify-center items-center object-contain p-4">
                <img src="/cat.png" className="w-full" alt="tsch-cat" />
              </div>
              <div className="w-[8.4rem] rounded bg-[#eee] flex flex-col justify-center items-center object-contain p-4">
                <img src="/danfoss.png" className="w-full" alt="tsch-danfoss" />
              </div>
              <div className="w-[8.4rem] rounded bg-[#eee] flex flex-col justify-center items-center object-contain p-4">
                <img src="/hyundai.png" className="w-full" alt="tsch-hyundai" />
              </div>
              <div className="w-[8.4rem] rounded bg-[#eee] flex flex-col justify-center items-center object-contain p-4">
                <img src="/hyster.png" className="w-full" alt="tsch-hyster" />
              </div>
              <div className="w-[8.4rem] rounded bg-[#eee] flex flex-col justify-center items-center object-contain p-4">
                <img src="/kalmar.png" className="w-full" alt="tsch-kalmar" />
              </div>
              <div className="w-[8.4rem] rounded bg-[#eee] flex flex-col justify-center items-center object-contain p-4">
                <img src="/komatsu.png" className="w-full" alt="tsch-komatsu" />
              </div>
              <div className="w-[8.4rem] rounded bg-[#eee] flex flex-col justify-center items-center object-contain p-4">
                <img src="/konecranes.png" className="w-full" alt="tsch-konecranes" />
              </div>
              <div className="w-[8.4rem] rounded bg-[#eee] flex flex-col justify-center items-center object-contain p-4">
                <img src="/liebherr.png" className="w-full" alt="tsch-liebherr" />
              </div>
            </div>
          </div>
          <div className="flex gap-8 w-[85%] max-w-7xl">
            <div className="flex gap-2 min-w-max"> {/* Igualmente aquí */}
              <div className="w-[8.4rem] rounded bg-[#eee] flex flex-col justify-center items-center object-contain p-4">
                <img src="/pyf.png" className="w-full" alt="tsch-p&f" />
              </div>
              <div className="w-[8.4rem] rounded bg-[#eee] flex flex-col justify-center items-center object-contain p-4">
                <img src="/rexroth.png" className="w-full" alt="tsch-rexroth&f" />
              </div>
              <div className="w-[8.4rem] rounded bg-[#eee] flex flex-col justify-center items-center object-contain p-4">
                <img src="/sennebogen.png" className="w-full" alt="tsch-sennebogen" />
              </div>
              <div className="w-[8.4rem] rounded bg-[#eee] flex flex-col justify-center items-center object-contain p-4">
                <img src="/spicer.png" className="w-full" alt="tsch-spicer" />
              </div>
              <div className="w-[8.4rem] rounded bg-[#eee] flex flex-col justify-center items-center object-contain p-4">
                <img src="/sun-hidraulics.png" className="w-full" alt="tsch-sun-hidraulics" />
              </div>
              <div className="w-[8.4rem] rounded bg-[#eee] flex flex-col justify-center items-center object-contain p-4">
                <img src="/terex.png" className="w-full" alt="tsch-terex" />
              </div>
              <div className="w-[8.4rem] rounded bg-[#eee] flex flex-col justify-center items-center object-contain p-4">
                <img src="/toyota.png" className="w-full" alt="tsch-toyota" />
              </div>
              <div className="w-[8.4rem] rounded bg-[#eee] flex flex-col justify-center items-center object-contain p-4">
                <img src="/volvo.png" className="w-full" alt="tsch-volvo" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalCotizacion
        open={quoteDialogOpen}
        onClose={() => setQuoteDialogOpen(false)}
        producto={selectedProduct}
        showEmailForm={showEmailForm}
        setShowEmailForm={setShowEmailForm}
        formData={formData}
        setFormData={setFormData}
        handleFormSubmit={handleFormSubmit}
        handleWhatsAppClick={handleWhatsAppClick}
      />
    </div>
  );
};

export default ShopMain;
