import { useEffect } from "react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdOutlineShoppingCart } from "react-icons/md";

const Shoping = () => {
    // Estado para almacenar la categoría seleccionada
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
    // 
    const [productos, setProductos] = useState([])

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const res = await fetch('/productos_tienda.json');
                const data = await res.json();
                setProductos(data);
            } catch (error) {
                console.log("error al cargar la DB : ", error);
            }
        }
        fetchProductos();
    }, [])


    // Filtrar productos según la categoría seleccionada
    const productosFiltrados = categoriaSeleccionada
        ? productos.filter((producto) => producto.category === categoriaSeleccionada)
        : productos;

    return (
        <div className="w-[85%] max-w-7xl mx-auto">
            <div className="flex gap-6 my-28">
                <div className="flex flex-col gap-4">
                    <button
                        className={`px-16 py-3 rounded-lg text-xl cursor-pointer ${!categoriaSeleccionada ? "bg-[#f9cb21]" : "bg-gray-200 hover:bg-gray-300 duration-200"}`}
                        onClick={() => setCategoriaSeleccionada(null)}
                    >
                        Todos
                    </button>
                    <button
                        className={`px-16 py-3 rounded-lg text-xl cursor-pointer ${categoriaSeleccionada === "Portacontenedores" ? "bg-[#f9cb21]" : "bg-gray-200 hover:bg-gray-300 duration-200"}`}
                        onClick={() => setCategoriaSeleccionada("Portacontenedores")}
                    >
                        Portacontenedores
                    </button>
                    <button
                        className={`px-16 py-3 rounded-lg text-xl cursor-pointer ${categoriaSeleccionada === "Montacargas" ? "bg-[#f9cb21]" : "bg-gray-200 hover:bg-gray-300 duration-200"}`}
                        onClick={() => setCategoriaSeleccionada("Montacargas")}
                    >
                        Montacargas
                    </button>
                    <button
                        className={`px-16 py-3 rounded-lg text-xl cursor-pointer ${categoriaSeleccionada === "Motores" ? "bg-[#f9cb21]" : "bg-gray-200 hover:bg-gray-300 duration-200"}`}
                        onClick={() => setCategoriaSeleccionada("Motores")}
                    >
                        Motores
                    </button>
                    <button
                        className={`px-16 py-3 rounded-lg text-xl cursor-pointer ${categoriaSeleccionada === "Transmisiones" ? "bg-[#f9cb21]" : "bg-gray-200 hover:bg-gray-300 duration-200"}`}
                        onClick={() => setCategoriaSeleccionada("Transmisiones")}
                    >
                        Transmisiones
                    </button>
                    <button
                        className={`px-16 py-3 rounded-lg text-xl cursor-pointer ${categoriaSeleccionada === "Solenoides" ? "bg-[#f9cb21]" : "bg-gray-200 hover:bg-gray-300 duration-200"}`}
                        onClick={() => setCategoriaSeleccionada("Solenoides")}
                    >
                        Solenoides
                    </button>
                    <button
                        className={`px-16 py-3 rounded-lg text-xl cursor-pointer ${categoriaSeleccionada === "Fisibles y relé" ? "bg-[#f9cb21]" : "bg-gray-200 hover:bg-gray-300 duration-200"}`}
                        onClick={() => setCategoriaSeleccionada("Fisibles y relé")}
                    >
                        Fisibles y relé
                    </button>
                    <button
                        className={`px-16 py-3 rounded-lg text-xl cursor-pointer ${categoriaSeleccionada === "Conectores automotrices" ? "bg-[#f9cb21]" : "bg-gray-200 hover:bg-gray-300 duration-200"}`}
                        onClick={() => setCategoriaSeleccionada("Conectores automotrices")}
                    >
                        Conectores automotrices
                    </button>
                    <button
                        className={`px-16 py-3 rounded-lg text-xl cursor-pointer ${categoriaSeleccionada === "Conectores industriales" ? "bg-[#f9cb21]" : "bg-gray-200 hover:bg-gray-300 duration-200"}`}
                        onClick={() => setCategoriaSeleccionada("Conectores industriales")}
                    >
                        Conectores industriales
                    </button>
                    <button
                        className={`px-16 py-3 rounded-lg text-xl cursor-pointer ${categoriaSeleccionada === "Bosch" ? "bg-[#f9cb21]" : "bg-gray-200 hover:bg-gray-300 duration-200"}`}
                        onClick={() => setCategoriaSeleccionada("Bosch")}
                    >
                        Bosch
                    </button>
                    <button
                        className={`px-16 py-3 rounded-lg text-xl cursor-pointer ${categoriaSeleccionada === "Delco remy" ? "bg-[#f9cb21]" : "bg-gray-200 hover:bg-gray-300 duration-200"}`}
                        onClick={() => setCategoriaSeleccionada("Delco remy")}
                    >
                        Delco remy
                    </button>
                    <button
                        className={`px-16 py-3 rounded-lg text-xl cursor-pointer ${categoriaSeleccionada === "Sensores industriales" ? "bg-[#f9cb21]" : "bg-gray-200 hover:bg-gray-300 duration-200"}`}
                        onClick={() => setCategoriaSeleccionada("Sensores industriales")}
                    >
                        Sensores industriales
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {productosFiltrados.map((producto, index) => (
                        <div
                        key={index}
                        className="w-72 flex flex-col justify-between bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                        data-aos="zoom-in"
                        data-aos-delay={`${index * 150}`}
                      >
                        <div className="flex justify-center items-center h-[241px]">
                          <img src={producto.image} className="object-contain max-h-full" alt={producto.name} />
                        </div>
                        
                        <div className="bg-white p-4 text-[#254168] flex flex-col justify-between flex-grow">
                          <div className="flex flex-col items-start gap-2">
                            <span className="text-xs sm:text-sm px-3 border border-[#f9cb21] rounded-xl">
                              {producto.category}
                            </span>
                            <p className="font-bold text-[clamp(1rem,3vw,1.2rem)] line-clamp-3">
                              {producto.descripcion}
                            </p>
                          </div>
                      
                          <div className="flex gap-3 mt-4">
                            <span className="text-xs sm:text-sm px-3 border border-[#254168] bg-[#254168] text-white rounded-xl">{producto.quality}</span>
                            <span className="text-xs sm:text-sm px-3 border border-[#f9cb21] text-[#254168] bg-[#f9cb21] rounded-xl">{producto.popularity}</span>
                          </div>
                      
                          <div className="flex justify-end items-center pt-4 mt-auto">
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
    );
};

export default Shoping;