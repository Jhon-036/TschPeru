import { useState, useEffect } from "react";
import { FaCheck, FaArrowLeft, FaEnvelope, FaWhatsapp, FaPaperPlane } from "react-icons/fa";

export default function Shoping() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [productos, setProductos] = useState([]);

  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const res = await fetch("/services/productos_tienda.json");
        const data = await res.json();
        setProductos(data);
      } catch (error) {
        console.log("Error al cargar la DB: ", error);
      }
    };
    fetchProductos();
  }, []);

  const productosFiltrados = categoriaSeleccionada
    ? productos.filter((producto) => producto.category === categoriaSeleccionada)
    : productos;

  const categorias = productos.length > 0 ? [...new Set(productos.map((producto) => producto.category))] : [];

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
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mt-16">
          <div className="relative bg-[url(/about-company.jpg)] h-[30rem] bg-center bg-no-repeat bg-cover">
            <div className="absolute w-full h-full flex items-center justify-center bg-black/35">
                <h2 className="text-white text-[clamp(1.2rem,5vw,3rem)]">NUESTROS PRODUCTOS</h2>
            </div>
          </div>
        <div className="container mx-auto px-4 py-8">
        
          <div className="flex flex-col md:flex-row gap-6 my-11">
            {/* Categorías - Desktop */}
            <div className="hidden md:block w-64 shrink-0">
              <div className="sticky top-4">
                <h2 className="text-xl font-semibold mb-4 text-[#254168]">Categorías</h2>
                <div className="space-y-2">
                  <button
                    className={`w-full cursor-pointer justify-start p-2 rounded-lg border ${!categoriaSeleccionada ? 'bg-[#254168] text-white' : 'border-[#254168] text-[#254168]'}`}
                    onClick={() => setCategoriaSeleccionada(null)}
                  >
                    Todos
                    {!categoriaSeleccionada && <FaCheck className="ml-2 inline" />}
                  </button>
                  {categorias.map((categoria) => (
                    <button
                      key={categoria}
                      className={`w-full cursor-pointer justify-start p-2 rounded-lg border ${categoriaSeleccionada === categoria ? 'bg-[#254168] text-white' : 'border-[#254168] text-[#254168]'}`}
                      onClick={() => setCategoriaSeleccionada(categoria)}
                    >
                      {categoria}
                      {categoriaSeleccionada === categoria && <FaCheck className="ml-2 inline" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>
        
            {/* Productos */}
            <div className="flex-1">
              {productos.length === 0 ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-pulse text-[#254168]">Cargando productos...</div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {productosFiltrados.map((producto) => (
                    <div key={producto.id} className="border p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                      <div className="w-full aspect-square relative mb-4">
                        <img src={producto.image || "/placeholder.svg"} alt={producto.name} className="object-cover w-full h-full" />
                      </div>
                      <h3 className="font-semibold text-lg text-[#254168]">{producto.name}</h3>
                      <p className="text-sm text-[#254168]/70 mb-2">{producto.category}</p>
                      <button
                        className="w-full mt-2 bg-[#f9cb21] hover:bg-[#e0b71e] text-[#254168] font-bold p-2 rounded cursor-pointer"
                        onClick={() => handleQuoteClick(producto.name)}
                      >
                        Cotizar
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        
          {/* Modal con animación */}
          {quoteDialogOpen && (
            <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
              <div className="bg-white rounded-lg p-6 max-w-md w-full relative animate-accordion-down">
                {!showEmailForm ? (
                  <>
                    <h2 className="text-xl font-bold text-[#254168] mb-4">Solicitar Cotización</h2>
                    <p className="mb-6">{selectedProduct && `Desea cotizar "${selectedProduct}" por:`}</p>
                    <div className="flex gap-4">
                      <button
                        className="flex-1 bg-[#254168] text-white p-2 rounded flex items-center justify-center transition-all hover:scale-105"
                        onClick={() => setShowEmailForm(true)}
                      >
                        <FaEnvelope className="mr-2" /> Correo
                      </button>
                      <button
                        className="flex-1 bg-[#25D366] text-white p-2 rounded flex items-center justify-center transition-all hover:scale-105"
                        onClick={() => setQuoteDialogOpen(false)}
                      >
                        <FaWhatsapp className="mr-2" /> WhatsApp
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <button className="absolute top-4 left-4" onClick={() => setShowEmailForm(false)}>
                      <FaArrowLeft />
                    </button>
                    <h2 className="text-xl font-bold text-[#254168] mb-4">Formulario de Cotización</h2>
                    <form onSubmit={handleFormSubmit} className="space-y-4 animate-accordion-down">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Nombre"
                        className="w-full p-2 border rounded"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Correo Electrónico"
                        className="w-full p-2 border rounded"
                        required
                      />
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Teléfono"
                        className="w-full p-2 border rounded"
                      />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={`Mensaje sobre ${selectedProduct}`}
                        className="w-full p-2 border rounded"
                        rows="4"
                        required
                      ></textarea>
                      <button type="submit" className="bg-[#f9cb21] text-[#254168] font-bold p-2 w-full flex items-center justify-center rounded transition-transform hover:scale-105">
                        <FaPaperPlane className="mr-2" /> Enviar
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
    </div>
  );
}
