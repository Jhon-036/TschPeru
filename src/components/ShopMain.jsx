import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const ShopMain = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const featuredCategories = [
    { name: "Filtros", image: "/categories--filter.webp" },
    { name: "Eléctrico", image: "/categories--electronic.webp" },
    { name: "Frenos", image: "/categories--brake.webp" },
    { name: "Suspensión", image: "/categories--suspension.webp" },
  ];

  const featuredParts = [
    {
      name: "Filtro de Aceite Premium",
      category: "Filtros",
      quality: "Premium",
      popularity: "Más Vendido",
      image: "/filter--AceitePremiumx500.png",
    },
    {
      name: "Batería de Alto Rendimiento",
      category: "Eléctrico",
      quality: "Premium",
      popularity: "Recomendado",
      image: "/elect--bateriaCatx500.png",
    },
    {
      name: "Juego de Frenos Cerámicos",
      category: "Frenos",
      quality: "Reforzado",
      popularity: "Más Vendido",
      image: "/fren--juegoFrenoCeramicox500.png",
    },
    {
      name: "Kit de Embrague Completo",
      category: "Transmisión",
      quality: "Genuino",
      popularity: "Más Vendido",
      image: "/trans--kitEmbriague.png",
    },
  ];

  return (
    <div className="">
      <div className="w-[85%] max-w-7xl mx-auto py-8 mt-8 m-auto">

        {/* Título principal */}
        <div data-aos="fade-up">
          <h2 className="text-[#254168] text-center font-bold text-[clamp(1.5rem,5vw,2.5rem)]">
            Componentes de Calidad para el Mundo Automotriz
          </h2>
          <p className="text-center mt-4 text-[#254168cc] text-[clamp(0.9rem,2vw,1.2rem)] max-w-4xl mx-auto">
            Ofrecemos una amplia selección de partes y accesorios de las mejores marcas para mantener tu vehículo en óptimas condiciones.
          </p>
        </div>

        {/* Categorías Populares */}
        <div className="mt-12" data-aos="fade-up">
          <div className="flex justify-between items-center mb-4 gap-5">
            <h3 className="text-[#254168] font-semibold text-[clamp(1.2rem,4vw,2rem)]">
              Categorías Populares
            </h3>
            <p className="text-sm md:text-xl flex items-center gap-1 text-[#f9cb21] cursor-pointer hover:underline">
              Ver Todas <FaArrowRight />
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 xl:gap-8 lg:mt-10">
            {featuredCategories.map((category, index) => (
              <div
                key={index}
                className="relative w-full aspect-square bg-cover bg-center bg-no-repeat transition-transform duration-300 hover:scale-105 cursor-pointer shadow-md"
                style={{ backgroundImage: `url(${category.image})` }}
                data-aos="fade-up"
                data-aos-delay={`${index * 150}`}
              >
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-[#f9cb21] text-white text-center">
                  <h2 className="font-semibold text-[clamp(1rem,3vw,1.4rem)]">{category.name}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Productos Destacados */}
        <div className="mt-12" data-aos="fade-up">
          <div className="flex justify-between items-center mb-4 gap-5">
            <h3 className="text-[#254168] font-semibold text-[clamp(1.2rem,4vw,2rem)]">
              Productos Destacados
            </h3>
            <p className="text-sm md:text-xl flex items-center gap-1 text-[#f9cb21] cursor-pointer hover:underline">
              Ver Todas <FaArrowRight />
            </p>
          </div>
          <div className="flex justify-between overflow-x-auto scrollbar-hide gap-4 py-4 px-[1px] ">
            {featuredParts.map((part, index) => (
              <div
                key={index}
                className="flex-none bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                data-aos="zoom-in"
                data-aos-delay={`${index * 150}`}
              >
                <div className="w-52 sm:w-72 h-56 sm:h-72 flex justify-center items-center">
                  <img src={part.image} className="object-contain p-6 h-full" alt={part.name} />
                </div>
                <div className="bg-white p-4 text-[#254168] grid gap-3">
                  <div className="flex flex-col items-start gap-2">
                    <span className="text-xs sm:text-sm px-3 border border-[#f9cb21] rounded-xl">
                      {part.category}
                    </span>
                    <p className="font-bold text-[clamp(1rem,3vw,1.4rem)]">
                      {part.name}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-xs sm:text-sm px-3 border border-[#254168] bg-[#254168] text-white rounded-xl">{part.quality}</span>
                    <span className="text-xs sm:text-sm px-3 border border-[#f9cb21] text-[#254168] bg-[#f9cb21] rounded-xl">{part.popularity}</span>
                  </div>
                  <div className="flex justify-end items-center pt-4">
                    <button className="flex items-center gap-2 bg-[#f9cb21] py-1 px-3 rounded-sm text-sm cursor-pointer">
                      <MdOutlineShoppingCart className="text-[#254168]" /> Cotizar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Video sección */}
      <div className="mt-12 relative" data-aos="fade-up">
        <video src="/montacargasContenedores.mp4" autoPlay muted loop playsInline className="w-full h-[20rem] object-cover sm:h-[30rem]"></video>
        <div className="absolute inset-0 flex flex-col justify-center text-center bg-black/30 text-white p-4 gap-4">
          <h3 className="text-[clamp(1.2rem,5vw,3.5rem)] font-semibold">Promociones Exclusivas</h3>
          <p className="font-light leading-5 sm:leading-10 text-[clamp(0.9rem,2vw,1.5rem)] max-w-3xl mx-auto">
            Aprovecha nuestras rebajas en productos seleccionados.
          </p>
          <button className="uppercase p-2 mt-2 bg-[#f9cb21] w-28 text-white font-semibold text-sm rounded-xl cursor-pointer hover:bg-[#f9bf21] transition-colors duration-300 mx-auto">Ver más</button>
        </div>
      </div>
    </div>
  );
};

export default ShopMain;
